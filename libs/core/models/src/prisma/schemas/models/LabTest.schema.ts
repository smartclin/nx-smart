import { z } from 'zod';

export const LabTestSchema = z.object({
  id: z.number().int(),
  recordId: z.number().int(),
  testDate: z.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().nullish(),
  serviceId: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LabTestType = z.infer<typeof LabTestSchema>;
