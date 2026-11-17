#!/usr/bin/env python3
"""Synthesise the sounds no recording covers yet, as mono 32 kHz WAV in client/dist/sfx:
pistol shot, pistol reload, concrete impact, ricochet, explosion, drone buzz (a seamless loop).
  python3 client/tools/make_sfx.py client/dist/sfx
Replace any of them with a recording of the same file name and the game uses that instead."""
import sys, numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile
SR = 32000; rng = np.random.default_rng(11)
t_ = lambda d: np.arange(int(d * SR)) / SR
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def lp(x, f, o=2): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=2): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def noise(d): return rng.standard_normal(int(d * SR))
def put(out, x, at, g=1.0):
    i = int(at * SR); n = min(len(x), len(out) - i)
    if n > 0: out[i:i + n] += x[:n] * g
def sweep(f0, f1, d, k=6.0):
    tt = t_(d); f = f1 + (f0 - f1) * np.exp(-tt * k); return np.sin(2 * np.pi * np.cumsum(f) / SR)
def tail(x, d=0.25, g=0.3, taps=14):
    """cheap early reflections off the surrounding buildings"""
    y = np.concatenate([x, np.zeros(int(d * SR))]); out = y.copy()
    for k in range(taps):
        dl = int((0.012 + rng.random() * d * 0.9) * SR); out[dl:] += lp(y[:-dl], 2600 - k * 120, 1) * g * (0.9 ** k) * rng.choice([-1, 1])
    return out
def save(dirn, name, x, peak=0.89, fade=0.03):
    x = np.tanh(x * 1.4); x = x / np.max(np.abs(x)) * peak
    n = int(fade * SR); x[-n:] *= np.linspace(1, 0, n); x[:32] *= np.linspace(0, 1, 32)
    wavfile.write(f'{dirn}/{name}.wav', SR, (x * 32767).astype(np.int16)); print(name, round(len(x) / SR, 2), 's')

def pistol():
    out = np.zeros(int(0.55 * SR)); tt = t_(0.5)
    put(out, hp(noise(0.012), 2500) * np.exp(-t_(0.012) * 400), 0, 1.4)                        # the crack
    put(out, bp(noise(0.5), 250, 5200) * np.exp(-tt * 34), 0.001, 1.2)                          # the blast
    put(out, sweep(230, 62, 0.22, 16) * np.exp(-t_(0.22) * 20), 0, 1.5)                         # the body
    put(out, bp(noise(0.03), 2800, 6500) * np.exp(-t_(0.03) * 150), 0.055, 0.35)                # the slide
    return tail(out, 0.3, 0.22)
def reload():
    out = np.zeros(int(0.85 * SR))
    def click(f, d=0.03, q=18): return bp(noise(d), f * 0.8, f * 1.25, 2) * np.exp(-t_(d) * (1 / d) * 4.5) + 0.5 * np.sin(2 * np.pi * f * t_(d)) * np.exp(-t_(d) * 90)
    put(out, lp(noise(0.09), 1800) * np.hanning(int(0.09 * SR)), 0.0, 0.5)                      # the magazine sliding in
    put(out, click(1500), 0.09, 1.3); put(out, click(2900, 0.02), 0.10, 0.8)                    # seating
    put(out, bp(noise(0.11), 1800, 5200) * np.linspace(0.2, 1, int(0.11 * SR)) ** 2, 0.42, 0.7) # the slide drawn back
    put(out, click(2300), 0.535, 1.0); put(out, click(3800, 0.025), 0.60, 1.4); put(out, click(1200, 0.04), 0.605, 0.9)   # and released
    return out
def concrete():
    out = np.zeros(int(0.5 * SR))
    put(out, bp(noise(0.08), 500, 2600) * np.exp(-t_(0.08) * 60), 0, 1.5)                       # the knock
    put(out, sweep(170, 70, 0.07, 30) * np.exp(-t_(0.07) * 45), 0, 0.9)
    put(out, hp(noise(0.006), 3000) * np.exp(-t_(0.006) * 700), 0, 1.0)
    for k in range(22):                                                                         # chips and grit
        d = 0.004 + rng.random() * 0.012; put(out, bp(noise(d), 1500 + rng.random() * 3500, 7000) * np.exp(-t_(d) * 300), 0.02 + rng.random() ** 1.6 * 0.38, 0.5 * (1 - k / 30) * rng.random())
    put(out, lp(noise(0.3), 900) * np.exp(-t_(0.3) * 14), 0.01, 0.25)                           # dust
    return out
def ricochet():
    d = 0.6; tt = t_(d); f = 900 + 2900 * np.exp(-tt * 5.5) + 60 * np.sin(2 * np.pi * 31 * tt); ph = 2 * np.pi * np.cumsum(f) / SR
    x = (np.sin(ph) + 0.35 * np.sin(2.01 * ph) + 0.15 * np.sin(3.02 * ph)) * np.exp(-tt * 6.5) * (1 - np.exp(-tt * 300))
    out = np.zeros(int(d * SR)); put(out, x, 0, 0.9); put(out, hp(noise(0.008), 2500) * np.exp(-t_(0.008) * 500), 0, 1.3)
    put(out, bp(noise(d), 2500, 7000) * np.exp(-tt * 9), 0, 0.12); return tail(out, 0.2, 0.15, 8)
def explosion():
    d = 2.6; out = np.zeros(int(d * SR)); tt = t_(d)
    put(out, hp(noise(0.02), 1500) * np.exp(-t_(0.02) * 220), 0, 1.6)                           # the crack
    put(out, sweep(95, 26, 1.6, 2.6) * np.exp(-t_(1.6) * 2.6), 0, 2.2)                          # the thump
    put(out, lp(noise(d), 420, 3) * np.exp(-tt * 2.2) * 6, 0.005, 1.0)                          # the roar
    put(out, bp(noise(d), 300, 2400) * np.exp(-tt * 5.5), 0.005, 1.1)
    for k in range(60):                                                                         # debris coming down
        dd = 0.006 + rng.random() * 0.03; at = 0.25 + rng.random() ** 0.8 * 1.9; put(out, bp(noise(dd), 700 + rng.random() * 3200, 6500) * np.exp(-t_(dd) * 160), at, 0.32 * rng.random() * np.exp(-at * 0.9))
    return tail(out, 0.35, 0.2, 10)
def drone():
    d = 2.0; tt = t_(d); x = np.zeros(len(tt))                                                  # every partial fits the loop exactly
    for f0 in (182.0, 187.5, 193.0, 198.5):
        for h in range(1, 14): x += np.sin(2 * np.pi * f0 * h * tt + rng.random() * 6.28) / h ** 1.15 * (1.0 if h % 2 else 0.6)
    x *= 1 + 0.18 * np.sin(2 * np.pi * 5.5 * tt) + 0.1 * np.sin(2 * np.pi * 11.0 * tt)          # blades beating against each other
    n = noise(d); n = bp(np.concatenate([n, n]), 1800, 6500)[len(tt):] * 0.35 * (1 + 0.5 * np.sin(2 * np.pi * 187.5 * tt))   # air through the rotors
    k = int(0.05 * SR); n[:k] = n[:k] * np.linspace(0, 1, k) + n[-k:] * np.linspace(1, 0, k); n = n[:len(tt)]; n[-k:] *= np.linspace(1, 0, k) ; n[-k:] += n[:k][::1] * 0
    y = x / np.max(np.abs(x)) + n; y = np.tanh(y * 1.3); y = y / np.max(np.abs(y)) * 0.8
    return (y * 32767).astype(np.int16)

if __name__ == '__main__':
    out = sys.argv[1]
    save(out, 'pistol', pistol(), 0.92); save(out, 'preload', reload(), 0.8); save(out, 'concrete', concrete(), 0.85)
    save(out, 'rico', ricochet(), 0.7); save(out, 'boom', explosion(), 0.95, 0.4)
    wavfile.write(f'{out}/buzz.wav', SR, drone()); print('buzz 2.0 s (loop)')
