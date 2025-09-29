import { z } from 'zod';
export const LabTestUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  recordId: z.number().int(),
  testDate: z.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional(),
  serviceId: z.number().int().optional(),
  services: z.unknown().optional(),
  medicalRecord: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));