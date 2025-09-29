import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema';
import { NestedEnumBillingStatusFilterObjectSchema as NestedEnumBillingStatusFilterObjectSchema } from './NestedEnumBillingStatusFilter.schema'

const makeSchema = () => z.object({
  equals: BillingStatusSchema.optional(),
  in: BillingStatusSchema.array().optional(),
  notIn: BillingStatusSchema.array().optional(),
  not: z.union([BillingStatusSchema, z.lazy(() => NestedEnumBillingStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumBillingStatusFilterObjectSchema: z.ZodType<Prisma.EnumBillingStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingStatusFilter>;
export const EnumBillingStatusFilterObjectZodSchema = makeSchema();
