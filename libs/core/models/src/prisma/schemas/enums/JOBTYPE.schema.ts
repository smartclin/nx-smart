import { z } from 'zod';

export const JOBTYPESchema = z.enum(['FULL', 'PART'])

export type JOBTYPE = z.infer<typeof JOBTYPESchema>;