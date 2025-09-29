import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardWhereInputObjectSchema as WHOGrowthStandardWhereInputObjectSchema } from './objects/WHOGrowthStandardWhereInput.schema';

export const WHOGrowthStandardDeleteManySchema: z.ZodType<Prisma.WHOGrowthStandardDeleteManyArgs> = z.object({ where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardDeleteManyArgs>;

export const WHOGrowthStandardDeleteManyZodSchema = z.object({ where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict();