import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationUpdateManyMutationInputObjectSchema as ImmunizationUpdateManyMutationInputObjectSchema } from './objects/ImmunizationUpdateManyMutationInput.schema';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './objects/ImmunizationWhereInput.schema';

export const ImmunizationUpdateManyAndReturnSchema: z.ZodType<Prisma.ImmunizationUpdateManyAndReturnArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), data: ImmunizationUpdateManyMutationInputObjectSchema, where: ImmunizationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationUpdateManyAndReturnArgs>;

export const ImmunizationUpdateManyAndReturnZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), data: ImmunizationUpdateManyMutationInputObjectSchema, where: ImmunizationWhereInputObjectSchema.optional() }).strict();