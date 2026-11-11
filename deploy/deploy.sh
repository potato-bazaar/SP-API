#!/usr/bin/env bash
# Sniper City deploy for small (1 GB) Oracle Linux 9 instances. Avoids dnf entirely:
# Node comes from nodejs.org, the code from sniper-app.tar.gz, and Node itself listens on port 80.
# Safe to run again to update (copy a new sniper-app.tar.gz up first).
set -euo pipefail
cd "$(dirname "$0")"
TARBALL="$PWD/sniper-app.tar.gz"
APP=/opt/sniper
NODE_DIR=/opt/node

echo "== 1/6 extra swap (so npm can't run the box out of memory)"
if [ ! -f /swapfile2 ]; then
  sudo fallocate -l 2G /swapfile2 && sudo chmod 600 /swapfile2 && sudo mkswap /swapfile2 >/dev/null
  echo '/swapfile2 none swap sw 0 0' | sudo tee -a /etc/fstab >/dev/null
fi
sudo swapon /swapfile2 2>/dev/null || true
free -h | grep -i swap

echo "== 2/6 firewall (ports 80, 443)"
sudo systemctl enable --now firewalld >/dev/null 2>&1 || true
sudo firewall-cmd --permanent --add-service=http --add-service=https >/dev/null
sudo firewall-cmd --reload >/dev/null

echo "== 3/6 Node 22 from nodejs.org"
if [ ! -x "$NODE_DIR/bin/node" ]; then
  BASE=https://nodejs.org/dist/latest-v22.x
  NAME=$(curl -fsSL "$BASE/SHASUMS256.txt" | awk '/linux-x64\.tar\.xz$/{print $2}')
  curl -fsSL -o "/tmp/$NAME" "$BASE/$NAME"
  (cd /tmp && curl -fsSL "$BASE/SHASUMS256.txt" | grep " $NAME\$" | sha256sum -c -)
  sudo mkdir -p "$NODE_DIR"
  sudo tar -xJf "/tmp/$NAME" -C "$NODE_DIR" --strip-components=1
  rm -f "/tmp/$NAME"
fi
export PATH="$NODE_DIR/bin:$PATH"
node -v

echo "== 4/6 code"
sudo mkdir -p "$APP" && sudo chown "$USER" "$APP"
find "$APP" -mindepth 1 -maxdepth 1 ! -name node_modules -exec rm -rf {} +
tar -xzf "$TARBALL" -C "$APP"
cd "$APP"
npm install --omit=dev --workspace server --include-workspace-root --no-audit --no-fund

echo "== 5/6 service (Node on port 80)"
# an earlier attempt may have installed nginx; it would hold port 80
sudo systemctl disable --now nginx >/dev/null 2>&1 || true
sudo tee /etc/systemd/system/sniper.service >/dev/null <<UNIT
[Unit]
Description=Sniper City
After=network.target

[Service]
WorkingDirectory=$APP
ExecStart=$NODE_DIR/bin/node server/src/server.js
Environment=NODE_ENV=production PORT=80
AmbientCapabilities=CAP_NET_BIND_SERVICE
Restart=always
User=$USER

[Install]
WantedBy=multi-user.target
UNIT
sudo systemctl daemon-reload
sudo systemctl enable sniper >/dev/null 2>&1
sudo systemctl restart sniper

echo "== 6/6 check"
for i in $(seq 1 60); do curl -fsS localhost/healthz >/dev/null 2>&1 && break; sleep 1; done
echo "game server: $(curl -fsS localhost/healthz || echo 'NOT RESPONDING - run: journalctl -u sniper -n 50')"
IP=$(curl -fsS -m 5 https://ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')
echo
echo "DONE. Open  http://$IP  and press PLAY ONLINE."
