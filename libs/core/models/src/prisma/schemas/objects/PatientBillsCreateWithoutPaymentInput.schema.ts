import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateNestedOneWithoutBillsInputObjectSchema as ServicesCreateNestedOneWithoutBillsInputObjectSchema } from './ServicesCreateNestedOneWithoutBillsInput.schema'

const makeSchema = () => z.object({
  serviceDate: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  service: z.lazy(() => ServicesCreateNestedOneWithoutBillsInputObjectSchema)
}).strict();
export const PatientBillsCreateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.PatientBillsCreateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsCreateWithoutPaymentInput>;
export const PatientBillsCreateWithoutPaymentInputObjectZodSchema = makeSchema();
