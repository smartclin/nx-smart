import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './objects/ServicesInclude.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './objects/ServicesWhereUniqueInput.schema';
import { ServicesCreateInputObjectSchema as ServicesCreateInputObjectSchema } from './objects/ServicesCreateInput.schema';
import { ServicesUncheckedCreateInputObjectSchema as ServicesUncheckedCreateInputObjectSchema } from './objects/ServicesUncheckedCreateInput.schema';
import { ServicesUpdateInputObjectSchema as ServicesUpdateInputObjectSchema } from './objects/ServicesUpdateInput.schema';
import { ServicesUncheckedUpdateInputObjectSchema as ServicesUncheckedUpdateInputObjectSchema } from './objects/ServicesUncheckedUpdateInput.schema';

export const ServicesUpsertOneSchema: z.ZodType<Prisma.ServicesUpsertArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), where: ServicesWhereUniqueInputObjectSchema, create: z.union([ ServicesCreateInputObjectSchema, ServicesUncheckedCreateInputObjectSchema ]), update: z.union([ ServicesUpdateInputObjectSchema, ServicesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ServicesUpsertArgs>;

export const ServicesUpsertOneZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), where: ServicesWhereUniqueInputObjectSchema, create: z.union([ ServicesCreateInputObjectSchema, ServicesUncheckedCreateInputObjectSchema ]), update: z.union([ ServicesUpdateInputObjectSchema, ServicesUncheckedUpdateInputObjectSchema ]) }).strict();