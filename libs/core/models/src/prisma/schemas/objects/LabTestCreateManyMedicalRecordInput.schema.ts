import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  serviceId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const LabTestCreateManyMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestCreateManyMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateManyMedicalRecordInput>;
export const LabTestCreateManyMedicalRecordInputObjectZodSchema = makeSchema();
