// Every message a client may send, validated before it touches a room. Anything else is dropped.
import { z } from 'zod';
import { SettingsPatch } from './rules.js';

const name = z.string().trim().min(1).max(16).regex(/^[\p{L}\p{N} _.\-]+$/u, 'letters, numbers, spaces, _ . - only');
const code = z.string().trim().toUpperCase().regex(/^[A-Z0-9]{5,8}$/);
const v3 = z.tuple([z.number().finite(), z.number().finite(), z.number().finite()]);

export const ClientMsg = z.discriminatedUnion('t', [
  z.object({ t: z.literal('hello'), name: name.optional(), token: z.string().max(64).optional(), v: z.number().int().optional(), maps: z.array(z.enum(['city', 'loop'])).max(8).optional() }),   // maps: the maps this client can load (older clients: the city only)
  z.object({ t: z.literal('create'), settings: SettingsPatch.optional(), parts: z.array(z.number().int().min(0).max(9)).max(8).optional() }),   // parts: the rifle parts this sniper has fitted (client/src/parts.js)
  z.object({ t: z.literal('join'), code, map: z.enum(['city', 'loop']).optional(), parts: z.array(z.number().int().min(0).max(9)).max(8).optional() }),   // map: the one this client has loaded right now
  z.object({ t: z.literal('leave') }),
  z.object({ t: z.literal('name'), name }),
  z.object({ t: z.literal('op'), k: z.number().int().min(0).max(7) }),   // which operator (body) this player wears; looks only
  // voice chat handshake, passed on to one other member of the room: hi (I have voice on), offer / answer / ice (WebRTC), bye
  z.object({ t: z.literal('rtc'), to: z.string().max(32), k: z.enum(['hi', 'offer', 'answer', 'ice', 'bye']), d: z.string().max(16000).optional() }),
  z.object({ t: z.literal('team'), team: z.union([z.literal(0), z.literal(1)]) }),
  z.object({ t: z.literal('ready'), v: z.boolean() }),
  z.object({ t: z.literal('settings'), patch: SettingsPatch }),
  z.object({ t: z.literal('kick'), id: z.string().max(32) }),
  z.object({ t: z.literal('host'), id: z.string().max(32) }),
  z.object({ t: z.literal('start') }),
  z.object({ t: z.literal('lobby') }),
  z.object({ t: z.literal('chat'), text: z.string().trim().min(1).max(140) }),
  z.object({ t: z.literal('ping'), c: z.number().finite(), r: z.number().min(0).max(5).optional() }),
  // in match
  // ln: lean offset, fd: playing dead (both shown to others; the engine clamps ln)
  z.object({ t: z.literal('in'), seq: z.number().int().nonnegative(), p: v3, yaw: z.number().finite(), pitch: z.number().finite(), c: z.number().min(0).max(1), mode: z.enum(['walk', 'link', 'mantle']), link: z.number().int().min(-1).max(4095).optional(), w: z.enum(['rifle', 'pistol']), ads: z.number().min(0).max(1), ln: z.number().finite().optional(), fd: z.number().optional(), mw: z.number().int().min(0).max(2).optional() }),   // mw: mid-swing with 1 hammer, 2 knife (shown to others)
  z.object({ t: z.literal('fire'), o: v3, d: v3, w: z.enum(['rifle', 'pistol']), ct: z.number().finite() }),
  z.object({ t: z.literal('reload'), w: z.enum(['rifle', 'pistol']) }),
  z.object({ t: z.literal('fall'), v: z.number().finite() }),
  z.object({ t: z.literal('melee'), d: v3, k: z.enum(['hammer', 'knife']).optional() }),   // a hammer (default) or knife swing along the camera
  z.object({ t: z.literal('nade'), k: z.enum(['gas', 'decoy', 'smoke']), o: v3, d: v3 }),      // a can thrown from o along d
  z.object({ t: z.literal('pu'), k: z.enum(['drone', 'strike', 'awm']) }),             // buy a power-up with points (AWM: 450, 3 pierce rounds)
  z.object({ t: z.literal('pum'), p: z.tuple([z.number().finite(), z.number().finite()]) }),   // missile strike: launch at (x, z)
  z.object({ t: z.literal('pray') }),                                                  // the prayer (once a match; the server pays it)
  z.object({ t: z.literal('rpg'), o: v3, d: v3 }),                                     // an RPG-7 rocket from o along d (2 a match; the server flies it)
  z.object({ t: z.literal('door'), i: z.number().int().min(0).max(63) }),            // stepped into door i: the server picks where you come out
  z.object({ t: z.literal('sil') }),                                                   // silencer picked up: bots no longer hear your shots
  z.object({ t: z.literal('nhurt'), c: z.enum(['alien', 'egg']), v: z.number().finite().min(1).max(999) }), // Blind One / egg damage to self
  z.object({ t: z.literal('nkill') }),                                                 // Blind One down: +150 points
  z.object({ t: z.literal('dev'), tp: v3 }),   // test servers only (SC_DEV=1): teleport
]);

export const PROTOCOL = 1;
