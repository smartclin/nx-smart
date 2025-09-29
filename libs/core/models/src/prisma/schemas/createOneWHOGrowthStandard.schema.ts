import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './objects/WHOGrowthStandardSelect.schema';
import { WHOGrowthStandardCreateInputObjectSchema as WHOGrowthStandardCreateInputObjectSchema } from './objects/WHOGrowthStandardCreateInput.schema';
import { WHOGrowthStandardUncheckedCreateInputObjectSchema as WHOGrowthStandardUncheckedCreateInputObjectSchema } from './objects/WHOGrowthStandardUncheckedCreateInput.schema';

export const WHOGrowthStandardCreateOneSchema: z.ZodType<Prisma.WHOGrowthStandardCreateArgs> = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  data: z.union([WHOGrowthStandardCreateInputObjectSchema, WHOGrowthStandardUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardCreateArgs>;

export const WHOGrowthStandardCreateOneZodSchema = z.object({ select: WHOGrowthStandardSelectObjectSchema.optional(),  data: z.union([WHOGrowthStandardCreateInputObjectSchema, WHOGrowthStandardUncheckedCreateInputObjectSchema]) }).strict();