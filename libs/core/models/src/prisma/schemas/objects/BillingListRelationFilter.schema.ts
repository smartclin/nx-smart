import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './BillingWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BillingWhereInputObjectSchema).optional(),
  some: z.lazy(() => BillingWhereInputObjectSchema).optional(),
  none: z.lazy(() => BillingWhereInputObjectSchema).optional()
}).strict();
export const BillingListRelationFilterObjectSchema: z.ZodType<Prisma.BillingListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BillingListRelationFilter>;
export const BillingListRelationFilterObjectZodSchema = makeSchema();
