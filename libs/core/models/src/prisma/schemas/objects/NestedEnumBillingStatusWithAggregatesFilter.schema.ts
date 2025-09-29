import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumBillingStatusFilterObjectSchema as NestedEnumBillingStatusFilterObjectSchema } from './NestedEnumBillingStatusFilter.schema'

const nestedenumbillingstatuswithaggregatesfilterSchema = z.object({
  equals: BillingStatusSchema.optional(),
  in: BillingStatusSchema.array().optional(),
  notIn: BillingStatusSchema.array().optional(),
  not: z.union([BillingStatusSchema, z.lazy(() => NestedEnumBillingStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumBillingStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumBillingStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumBillingStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumBillingStatusWithAggregatesFilter> = nestedenumbillingstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBillingStatusWithAggregatesFilter>;
export const NestedEnumBillingStatusWithAggregatesFilterObjectZodSchema = nestedenumbillingstatuswithaggregatesfilterSchema;
