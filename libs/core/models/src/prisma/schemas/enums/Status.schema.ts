import { z } from 'zod';

export const StatusSchema = z.enum(['ACTIVE', 'INACTIVE', 'DORMANT'])

export type Status = z.infer<typeof StatusSchema>;