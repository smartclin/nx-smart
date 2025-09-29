import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardUpdateInputObjectSchema as WHOGrowthStandardUpdateInputObjectSchema } from './objects/WHOGrowthStandardUpdateInput.schema';
import { WHOGrowthStandardUncheckedUpdateInputObjectSchema as WHOGrowthStandardUncheckedUpdateInputObjectSchema } from './objects/WHOGrowthStandardUncheckedUpdateInput.schema';
import { WHOGrowthStandardWhereUniqueInputObjectSchema as WHOGrowthStandardWhereUniqueInputObjectSchema } from './objects/WHOGrowthStandardWhereUniqueInput.schema';

export const WHOGrowthStandardUpdateOneSchema: z.ZodType<Prisma.WHOGrowthStandardUpdateArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  data: z.union([WHOGrowthStandardUpdateInputObjectSchema, WHOGrowthStandardUncheckedUpdateInputObjectSchema]), where: WHOGrowthStandardWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardUpdateArgs>;

export const WHOGrowthStandardUpdateOneZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  data: z.union([WHOGrowthStandardUpdateInputObjectSchema, WHOGrowthStandardUncheckedUpdateInputObjectSchema]), where: WHOGrowthStandardWhereUniqueInputObjectSchema }).strict();