import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationUpdateInputObjectSchema as ImmunizationUpdateInputObjectSchema } from './objects/ImmunizationUpdateInput.schema';
import { ImmunizationUncheckedUpdateInputObjectSchema as ImmunizationUncheckedUpdateInputObjectSchema } from './objects/ImmunizationUncheckedUpdateInput.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';

export const ImmunizationUpdateOneSchema: z.ZodType<Prisma.ImmunizationUpdateArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), data: z.union([ImmunizationUpdateInputObjectSchema, ImmunizationUncheckedUpdateInputObjectSchema]), where: ImmunizationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImmunizationUpdateArgs>;

export const ImmunizationUpdateOneZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), data: z.union([ImmunizationUpdateInputObjectSchema, ImmunizationUncheckedUpdateInputObjectSchema]), where: ImmunizationWhereUniqueInputObjectSchema }).strict();