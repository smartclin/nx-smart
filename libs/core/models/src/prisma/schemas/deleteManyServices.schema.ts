import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './objects/ServicesWhereInput.schema';

export const ServicesDeleteManySchema: z.ZodType<Prisma.ServicesDeleteManyArgs> = z.object({ where: ServicesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServicesDeleteManyArgs>;

export const ServicesDeleteManyZodSchema = z.object({ where: ServicesWhereInputObjectSchema.optional() }).strict();