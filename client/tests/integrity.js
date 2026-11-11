const a = sc.assets; const h = (buf) => { const u = new Uint8Array(buf); let x = 2166136261; for (let i = 0; i < u.length; i++) { x ^= u[i]; x = Math.imul(x, 16777619); } return (x >>> 0).toString(16); };
return { modelsLen: a.models.byteLength, modelsHash: h(a.models), texItems: a.pack.size, kitTypes: Object.keys(a.kit.types).length, arenaRoofs: a.arena.roofs.length };
