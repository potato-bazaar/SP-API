// Every message a client may send, validated before it touches a room. Anything else is dropped.
import { z } from 'zod';
import { SettingsPatch } from './rules.js';

const name = z.string().trim().min(1).max(16).regex(/^[\p{L}\p{N} _.\-]+$/u, 'letters, numbers, spaces, _ . - only');
const code = z.string().trim().toUpperCase().regex(/^[A-Z0-9]{5,8}$/);
const v3 = z.tuple([z.number().finite(), z.number().finite(), z.number().finite()]);

export const ClientMsg = z.discriminatedUnion('t', [
  z.object({ t: z.literal('hello'), name: name.optional(), token: z.string().max(64).optional(), v: z.number().int().optional() }),
  z.object({ t: z.literal('create'), settings: SettingsPatch.optional() }),
  z.object({ t: z.literal('join'), code }),
  z.object({ t: z.literal('leave') }),
  z.object({ t: z.literal('name'), name }),
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
  z.object({ t: z.literal('in'), seq: z.number().int().nonnegative(), p: v3, yaw: z.number().finite(), pitch: z.number().finite(), c: z.number().min(0).max(1), mode: z.enum(['walk', 'link', 'mantle']), link: z.number().int().min(-1).max(255).optional(), w: z.enum(['rifle', 'pistol']), ads: z.number().min(0).max(1) }),
  z.object({ t: z.literal('fire'), o: v3, d: v3, w: z.enum(['rifle', 'pistol']), ct: z.number().finite() }),
  z.object({ t: z.literal('reload'), w: z.enum(['rifle', 'pistol']) }),
  z.object({ t: z.literal('fall'), v: z.number().finite() }),
  z.object({ t: z.literal('dev'), tp: v3 }),   // test servers only (SC_DEV=1): teleport
]);

export const PROTOCOL = 1;
