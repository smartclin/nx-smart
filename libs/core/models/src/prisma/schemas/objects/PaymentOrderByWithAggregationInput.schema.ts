import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PaymentCountOrderByAggregateInputObjectSchema as PaymentCountOrderByAggregateInputObjectSchema } from './PaymentCountOrderByAggregateInput.schema';
import { PaymentAvgOrderByAggregateInputObjectSchema as PaymentAvgOrderByAggregateInputObjectSchema } from './PaymentAvgOrderByAggregateInput.schema';
import { PaymentMaxOrderByAggregateInputObjectSchema as PaymentMaxOrderByAggregateInputObjectSchema } from './PaymentMaxOrderByAggregateInput.schema';
import { PaymentMinOrderByAggregateInputObjectSchema as PaymentMinOrderByAggregateInputObjectSchema } from './PaymentMinOrderByAggregateInput.schema';
import { PaymentSumOrderByAggregateInputObjectSchema as PaymentSumOrderByAggregateInputObjectSchema } from './PaymentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  billId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  billDate: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  discount: SortOrderSchema.optional(),
  totalAmount: SortOrderSchema.optional(),
  amountPaid: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  receiptNumber: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PaymentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentOrderByWithAggregationInput>;
export const PaymentOrderByWithAggregationInputObjectZodSchema = makeSchema();
