import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationCreateManyInputObjectSchema as ImmunizationCreateManyInputObjectSchema } from './objects/ImmunizationCreateManyInput.schema';

export const ImmunizationCreateManyAndReturnSchema: z.ZodType<Prisma.ImmunizationCreateManyAndReturnArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), data: z.union([ ImmunizationCreateManyInputObjectSchema, z.array(ImmunizationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationCreateManyAndReturnArgs>;

export const ImmunizationCreateManyAndReturnZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), data: z.union([ ImmunizationCreateManyInputObjectSchema, z.array(ImmunizationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();