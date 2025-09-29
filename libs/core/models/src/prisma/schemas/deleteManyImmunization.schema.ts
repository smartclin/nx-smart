import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './objects/ImmunizationWhereInput.schema';

export const ImmunizationDeleteManySchema: z.ZodType<Prisma.ImmunizationDeleteManyArgs> = z.object({ where: ImmunizationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationDeleteManyArgs>;

export const ImmunizationDeleteManyZodSchema = z.object({ where: ImmunizationWhereInputObjectSchema.optional() }).strict();