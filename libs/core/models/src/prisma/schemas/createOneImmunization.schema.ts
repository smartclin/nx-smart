import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationCreateInputObjectSchema as ImmunizationCreateInputObjectSchema } from './objects/ImmunizationCreateInput.schema';
import { ImmunizationUncheckedCreateInputObjectSchema as ImmunizationUncheckedCreateInputObjectSchema } from './objects/ImmunizationUncheckedCreateInput.schema';

export const ImmunizationCreateOneSchema: z.ZodType<Prisma.ImmunizationCreateArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), data: z.union([ImmunizationCreateInputObjectSchema, ImmunizationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ImmunizationCreateArgs>;

export const ImmunizationCreateOneZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), data: z.union([ImmunizationCreateInputObjectSchema, ImmunizationUncheckedCreateInputObjectSchema]) }).strict();