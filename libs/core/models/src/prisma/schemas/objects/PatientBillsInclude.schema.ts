import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesArgsObjectSchema as ServicesArgsObjectSchema } from './ServicesArgs.schema';
import { PaymentArgsObjectSchema as PaymentArgsObjectSchema } from './PaymentArgs.schema'

const makeSchema = () => z.object({
  service: z.union([z.boolean(), z.lazy(() => ServicesArgsObjectSchema)]).optional(),
  payment: z.union([z.boolean(), z.lazy(() => PaymentArgsObjectSchema)]).optional()
}).strict();
export const PatientBillsIncludeObjectSchema: z.ZodType<Prisma.PatientBillsInclude> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsInclude>;
export const PatientBillsIncludeObjectZodSchema = makeSchema();
