import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationUpdateManyMutationInputObjectSchema as ImmunizationUpdateManyMutationInputObjectSchema } from './objects/ImmunizationUpdateManyMutationInput.schema';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './objects/ImmunizationWhereInput.schema';

export const ImmunizationUpdateManySchema: z.ZodType<Prisma.ImmunizationUpdateManyArgs> = z.object({ data: ImmunizationUpdateManyMutationInputObjectSchema, where: ImmunizationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationUpdateManyArgs>;

export const ImmunizationUpdateManyZodSchema = z.object({ data: ImmunizationUpdateManyMutationInputObjectSchema, where: ImmunizationWhereInputObjectSchema.optional() }).strict();