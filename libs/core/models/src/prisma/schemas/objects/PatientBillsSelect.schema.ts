import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesArgsObjectSchema as ServicesArgsObjectSchema } from './ServicesArgs.schema';
import { PaymentArgsObjectSchema as PaymentArgsObjectSchema } from './PaymentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  billId: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  serviceDate: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitCost: z.boolean().optional(),
  totalCost: z.boolean().optional(),
  service: z.union([z.boolean(), z.lazy(() => ServicesArgsObjectSchema)]).optional(),
  payment: z.union([z.boolean(), z.lazy(() => PaymentArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const PatientBillsSelectObjectSchema: z.ZodType<Prisma.PatientBillsSelect> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsSelect>;
export const PatientBillsSelectObjectZodSchema = makeSchema();
