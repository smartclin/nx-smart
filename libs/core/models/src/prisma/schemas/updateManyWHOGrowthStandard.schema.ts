import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardUpdateManyMutationInputObjectSchema as WHOGrowthStandardUpdateManyMutationInputObjectSchema } from './objects/WHOGrowthStandardUpdateManyMutationInput.schema';
import { WHOGrowthStandardWhereInputObjectSchema as WHOGrowthStandardWhereInputObjectSchema } from './objects/WHOGrowthStandardWhereInput.schema';

export const WHOGrowthStandardUpdateManySchema: z.ZodType<Prisma.WHOGrowthStandardUpdateManyArgs> = z.object({ data: WHOGrowthStandardUpdateManyMutationInputObjectSchema, where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardUpdateManyArgs>;

export const WHOGrowthStandardUpdateManyZodSchema = z.object({ data: WHOGrowthStandardUpdateManyMutationInputObjectSchema, where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict();