// Room settings: the one schema both the lobby and the match engine read. Settings are locked once a match starts.
import { z } from 'zod';

export const MODES = { ffa: { teams: false, slots: 8, min: 2 }, '2v2': { teams: true, slots: 4, teamSize: 2 }, '4v4': { teams: true, slots: 8, teamSize: 4 } };

export const SettingsSchema = z.object({
  mode: z.enum(['ffa', '2v2', '4v4']).default('ffa'),
  maxPlayers: z.number().int().min(2).max(8).default(8),        // free-for-all only; team modes use their fixed slot count
  bots: z.number().int().min(0).max(7).default(3),              // AI snipers added to the match
  botSkill: z.number().int().min(0).max(2).default(1),          // 0 recruit, 1 marksman, 2 ghost
  respawn: z.boolean().default(false),                          // false: one life (last one / last team standing)
  respawnDelay: z.number().int().min(2).max(15).default(5),
  timeLimit: z.number().int().min(120).max(900).default(300),   // seconds
  scoreLimit: z.number().int().min(0).max(100).default(0),      // respawn mode: kills to win (0 = play to the clock)
  halo: z.boolean().default(true),                              // the closing zone
  angelGaze: z.boolean().default(true),                         // the angel's reveal at each contraction
  angelShots: z.number().int().min(0).max(2).default(0),        // the angel fires at each contraction: 0 off, 1 light, 2 heavy
  fog: z.boolean().default(false),                              // fog over the roofs: clients draw it, bots see far less
  headshotsOnly: z.boolean().default(false),
  friendlyFire: z.boolean().default(false),
  hammer: z.boolean().default(true),                            // false: nobody (players or bots) can swing the hammer
  knife: z.boolean().default(true),                             // the knife (middle mouse)
  gas: z.boolean().default(true),                               // gas cans (players and AI snipers)
  smoke: z.boolean().default(true),                             // smoke bombs
  decoy: z.boolean().default(true),                             // decoy cans
  drone: z.boolean().default(true),                             // power-up: the attack drone (300 points)
  strike: z.boolean().default(true),                            // power-up: the missile strike (600 points)
  map: z.enum(['city', 'loop']).default('city'),                // which map: the city, or LOOP CITY (the ring). Fixed when the room is made: everyone in it has that map loaded
  voice: z.boolean().default(true),                             // voice chat between players (the server only passes the handshake; sound goes browser to browser)
}).strict();

export const SettingsPatch = SettingsSchema.partial().strict();
export const DEFAULTS = SettingsSchema.parse({});

export function slotsFor(s) { return MODES[s.mode].teams ? MODES[s.mode].slots : s.maxPlayers; }
// clamp a merged settings object so it is always playable for the people already in the room
export function normalise(s, humans) {
  const out = { ...s }; const slots = slotsFor(out);
  out.bots = Math.max(0, Math.min(out.bots, slots - humans));
  if (!out.respawn) out.scoreLimit = 0;
  return out;
}
