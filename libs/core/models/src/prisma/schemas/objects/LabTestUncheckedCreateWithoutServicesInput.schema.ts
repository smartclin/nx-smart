import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  recordId: z.number().int(),
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const LabTestUncheckedCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestUncheckedCreateWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUncheckedCreateWithoutServicesInput>;
export const LabTestUncheckedCreateWithoutServicesInputObjectZodSchema = makeSchema();
