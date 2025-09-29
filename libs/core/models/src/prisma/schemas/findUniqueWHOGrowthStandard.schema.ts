import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardWhereUniqueInputObjectSchema as WHOGrowthStandardWhereUniqueInputObjectSchema } from './objects/WHOGrowthStandardWhereUniqueInput.schema';

export const WHOGrowthStandardFindUniqueSchema: z.ZodType<Prisma.WHOGrowthStandardFindUniqueArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  where: WHOGrowthStandardWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardFindUniqueArgs>;

export const WHOGrowthStandardFindUniqueZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  where: WHOGrowthStandardWhereUniqueInputObjectSchema }).strict();