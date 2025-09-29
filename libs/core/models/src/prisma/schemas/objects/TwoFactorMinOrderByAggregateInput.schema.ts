import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  secret: SortOrderSchema.optional(),
  backupCodes: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const TwoFactorMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TwoFactorMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorMinOrderByAggregateInput>;
export const TwoFactorMinOrderByAggregateInputObjectZodSchema = makeSchema();
