import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateNestedOneWithoutBillsInputObjectSchema as ServicesCreateNestedOneWithoutBillsInputObjectSchema } from './ServicesCreateNestedOneWithoutBillsInput.schema';
import { PaymentCreateNestedOneWithoutBillsInputObjectSchema as PaymentCreateNestedOneWithoutBillsInputObjectSchema } from './PaymentCreateNestedOneWithoutBillsInput.schema'

const makeSchema = () => z.object({
  serviceDate: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputObjectSchema),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutBillsInputObjectSchema)
}).strict();
export const PatientBillsCreateInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateInput>;
export const PatientBillsCreateInputObjectZodSchema = makeSchema();
