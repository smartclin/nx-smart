import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './objects/ServicesInclude.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './objects/ServicesWhereUniqueInput.schema';

export const ServicesFindUniqueSchema: z.ZodType<Prisma.ServicesFindUniqueArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), where: ServicesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServicesFindUniqueArgs>;

export const ServicesFindUniqueZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), where: ServicesWhereUniqueInputObjectSchema }).strict();