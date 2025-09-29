import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';

export const ImmunizationDeleteOneSchema: z.ZodType<Prisma.ImmunizationDeleteArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImmunizationDeleteArgs>;

export const ImmunizationDeleteOneZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema }).strict();