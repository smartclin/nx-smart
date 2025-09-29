import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardUpdateManyMutationInputObjectSchema as WHOGrowthStandardUpdateManyMutationInputObjectSchema } from './objects/WHOGrowthStandardUpdateManyMutationInput.schema';
import { WHOGrowthStandardWhereInputObjectSchema as WHOGrowthStandardWhereInputObjectSchema } from './objects/WHOGrowthStandardWhereInput.schema';

export const WHOGrowthStandardUpdateManyAndReturnSchema: z.ZodType<Prisma.WHOGrowthStandardUpdateManyAndReturnArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(), data: WHOGrowthStandardUpdateManyMutationInputObjectSchema, where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardUpdateManyAndReturnArgs>;

export const WHOGrowthStandardUpdateManyAndReturnZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(), data: WHOGrowthStandardUpdateManyMutationInputObjectSchema, where: WHOGrowthStandardWhereInputObjectSchema.optional() }).strict();