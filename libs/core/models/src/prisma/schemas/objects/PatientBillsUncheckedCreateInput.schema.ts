import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  billId: z.number().int(),
  serviceId: z.number().int(),
  serviceDate: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PatientBillsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PatientBillsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUncheckedCreateInput>;
export const PatientBillsUncheckedCreateInputObjectZodSchema = makeSchema();
