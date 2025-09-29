import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  recordId: z.number().int(),
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  serviceId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const LabTestUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LabTestUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUncheckedCreateInput>;
export const LabTestUncheckedCreateInputObjectZodSchema = makeSchema();
