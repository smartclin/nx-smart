import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationCreateManyInputObjectSchema as ImmunizationCreateManyInputObjectSchema } from './objects/ImmunizationCreateManyInput.schema';

export const ImmunizationCreateManySchema: z.ZodType<Prisma.ImmunizationCreateManyArgs> = z.object({ data: z.union([ ImmunizationCreateManyInputObjectSchema, z.array(ImmunizationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationCreateManyArgs>;

export const ImmunizationCreateManyZodSchema = z.object({ data: z.union([ ImmunizationCreateManyInputObjectSchema, z.array(ImmunizationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();