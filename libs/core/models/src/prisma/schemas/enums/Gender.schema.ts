import { z } from 'zod';

export const GenderSchema = z.enum(['Male', 'Female'])

export type Gender = z.infer<typeof GenderSchema>;