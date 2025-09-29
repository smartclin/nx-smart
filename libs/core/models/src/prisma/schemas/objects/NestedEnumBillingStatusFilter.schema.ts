import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingStatusSchema } from '../enums/BillingStatus.schema'

const nestedenumbillingstatusfilterSchema = z.object({
  equals: BillingStatusSchema.optional(),
  in: BillingStatusSchema.array().optional(),
  notIn: BillingStatusSchema.array().optional(),
  not: z.union([BillingStatusSchema, z.lazy(() => NestedEnumBillingStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumBillingStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumBillingStatusFilter> = nestedenumbillingstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumBillingStatusFilter>;
export const NestedEnumBillingStatusFilterObjectZodSchema = nestedenumbillingstatusfilterSchema;
