import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesCreateManyInputObjectSchema as ServicesCreateManyInputObjectSchema } from './objects/ServicesCreateManyInput.schema';

export const ServicesCreateManyAndReturnSchema: z.ZodType<Prisma.ServicesCreateManyAndReturnArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), data: z.union([ ServicesCreateManyInputObjectSchema, z.array(ServicesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ServicesCreateManyAndReturnArgs>;

export const ServicesCreateManyAndReturnZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), data: z.union([ ServicesCreateManyInputObjectSchema, z.array(ServicesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();