import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServicesOrderByWithRelationInputObjectSchema as ServicesOrderByWithRelationInputObjectSchema } from './ServicesOrderByWithRelationInput.schema';
import { PaymentOrderByWithRelationInputObjectSchema as PaymentOrderByWithRelationInputObjectSchema } from './PaymentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  serviceDate: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  unitCost: SortOrderSchema.optional(),
  totalCost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  service: z.lazy(() => ServicesOrderByWithRelationInputObjectSchema).optional(),
  payment: z.lazy(() => PaymentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PatientBillsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PatientBillsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsOrderByWithRelationInput>;
export const PatientBillsOrderByWithRelationInputObjectZodSchema = makeSchema();
