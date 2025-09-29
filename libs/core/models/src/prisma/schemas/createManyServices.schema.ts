import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesCreateManyInputObjectSchema as ServicesCreateManyInputObjectSchema } from './objects/ServicesCreateManyInput.schema';

export const ServicesCreateManySchema: z.ZodType<Prisma.ServicesCreateManyArgs> = z.object({ data: z.union([ ServicesCreateManyInputObjectSchema, z.array(ServicesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ServicesCreateManyArgs>;

export const ServicesCreateManyZodSchema = z.object({ data: z.union([ ServicesCreateManyInputObjectSchema, z.array(ServicesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();