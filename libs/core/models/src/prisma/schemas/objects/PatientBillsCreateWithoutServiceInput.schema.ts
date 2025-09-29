import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PaymentCreateNestedOneWithoutBillsInputObjectSchema as PaymentCreateNestedOneWithoutBillsInputObjectSchema } from './PaymentCreateNestedOneWithoutBillsInput.schema'

const makeSchema = () => z.object({
  serviceDate: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputObjectSchema)
}).strict();
export const PatientBillsCreateWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateWithoutServiceInput>;
export const PatientBillsCreateWithoutServiceInputObjectZodSchema = makeSchema();
