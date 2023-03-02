import { z } from 'zod';

export const zNote = z.object({
  id: z.number().int(),
  title: z.string(),
  body: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export const zNotes = z.array(zNote);
export const zUpsertNote = z.object({
  title: z.string(),
  body: z.string(),
});

export type Note = z.infer<typeof zNote>;
export type Notes = z.infer<typeof zNotes>;
