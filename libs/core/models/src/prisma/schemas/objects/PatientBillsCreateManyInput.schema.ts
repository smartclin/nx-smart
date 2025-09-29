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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PatientBillsCreateManyInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateManyInput>;
export const PatientBillsCreateManyInputObjectZodSchema = makeSchema();
