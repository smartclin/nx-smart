import { z } from 'zod';

export const ImmunizationSchema = z.object({
  id: z.string(),
  patientId: z.string(),
  vaccine: z.string(),
  date: z.date(),
  dose: z.string().nullish(),
  lotNumber: z.string().nullish(),
  administeredByStaffId: z.string().nullish(),
  notes: z.string().nullish(),
  createdAt: z.date(),
});

export type ImmunizationType = z.infer<typeof ImmunizationSchema>;
