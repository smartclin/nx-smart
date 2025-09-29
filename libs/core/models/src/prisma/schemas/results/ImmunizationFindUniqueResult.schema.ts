import { z } from 'zod';
export const ImmunizationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  patientId: z.string(),
  patient: z.unknown(),
  vaccine: z.string(),
  date: z.date(),
  dose: z.string().optional(),
  lotNumber: z.string().optional(),
  administeredByStaffId: z.string().optional(),
  administeredBy: z.unknown().optional(),
  notes: z.string().optional(),
  createdAt: z.date()
}));