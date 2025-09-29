import { z } from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'STAFF', 'DOCTOR', 'PATIENT'])

export type Role = z.infer<typeof RoleSchema>;