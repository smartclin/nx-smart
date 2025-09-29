import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesUpdateManyMutationInputObjectSchema as ServicesUpdateManyMutationInputObjectSchema } from './objects/ServicesUpdateManyMutationInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './objects/ServicesWhereInput.schema';

export const ServicesUpdateManySchema: z.ZodType<Prisma.ServicesUpdateManyArgs> = z.object({ data: ServicesUpdateManyMutationInputObjectSchema, where: ServicesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServicesUpdateManyArgs>;

export const ServicesUpdateManyZodSchema = z.object({ data: ServicesUpdateManyMutationInputObjectSchema, where: ServicesWhereInputObjectSchema.optional() }).strict();