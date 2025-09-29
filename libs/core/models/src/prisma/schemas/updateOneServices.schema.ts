import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './objects/ServicesInclude.schema';
import { ServicesUpdateInputObjectSchema as ServicesUpdateInputObjectSchema } from './objects/ServicesUpdateInput.schema';
import { ServicesUncheckedUpdateInputObjectSchema as ServicesUncheckedUpdateInputObjectSchema } from './objects/ServicesUncheckedUpdateInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './objects/ServicesWhereUniqueInput.schema';

export const ServicesUpdateOneSchema: z.ZodType<Prisma.ServicesUpdateArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), data: z.union([ServicesUpdateInputObjectSchema, ServicesUncheckedUpdateInputObjectSchema]), where: ServicesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServicesUpdateArgs>;

export const ServicesUpdateOneZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), data: z.union([ServicesUpdateInputObjectSchema, ServicesUncheckedUpdateInputObjectSchema]), where: ServicesWhereUniqueInputObjectSchema }).strict();