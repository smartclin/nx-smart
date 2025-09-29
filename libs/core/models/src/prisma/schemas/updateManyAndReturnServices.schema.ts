import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesUpdateManyMutationInputObjectSchema as ServicesUpdateManyMutationInputObjectSchema } from './objects/ServicesUpdateManyMutationInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './objects/ServicesWhereInput.schema';

export const ServicesUpdateManyAndReturnSchema: z.ZodType<Prisma.ServicesUpdateManyAndReturnArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), data: ServicesUpdateManyMutationInputObjectSchema, where: ServicesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServicesUpdateManyAndReturnArgs>;

export const ServicesUpdateManyAndReturnZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), data: ServicesUpdateManyMutationInputObjectSchema, where: ServicesWhereInputObjectSchema.optional() }).strict();