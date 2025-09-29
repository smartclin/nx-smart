import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardWhereUniqueInputObjectSchema as WHOGrowthStandardWhereUniqueInputObjectSchema } from './objects/WHOGrowthStandardWhereUniqueInput.schema';
import { WHOGrowthStandardCreateInputObjectSchema as WHOGrowthStandardCreateInputObjectSchema } from './objects/WHOGrowthStandardCreateInput.schema';
import { WHOGrowthStandardUncheckedCreateInputObjectSchema as WHOGrowthStandardUncheckedCreateInputObjectSchema } from './objects/WHOGrowthStandardUncheckedCreateInput.schema';
import { WHOGrowthStandardUpdateInputObjectSchema as WHOGrowthStandardUpdateInputObjectSchema } from './objects/WHOGrowthStandardUpdateInput.schema';
import { WHOGrowthStandardUncheckedUpdateInputObjectSchema as WHOGrowthStandardUncheckedUpdateInputObjectSchema } from './objects/WHOGrowthStandardUncheckedUpdateInput.schema';

export const WHOGrowthStandardUpsertOneSchema: z.ZodType<Prisma.WHOGrowthStandardUpsertArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  where: WHOGrowthStandardWhereUniqueInputObjectSchema, create: z.union([ WHOGrowthStandardCreateInputObjectSchema, WHOGrowthStandardUncheckedCreateInputObjectSchema ]), update: z.union([ WHOGrowthStandardUpdateInputObjectSchema, WHOGrowthStandardUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardUpsertArgs>;

export const WHOGrowthStandardUpsertOneZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  where: WHOGrowthStandardWhereUniqueInputObjectSchema, create: z.union([ WHOGrowthStandardCreateInputObjectSchema, WHOGrowthStandardUncheckedCreateInputObjectSchema ]), update: z.union([ WHOGrowthStandardUpdateInputObjectSchema, WHOGrowthStandardUncheckedUpdateInputObjectSchema ]) }).strict();