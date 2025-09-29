import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';
import { ImmunizationCreateInputObjectSchema as ImmunizationCreateInputObjectSchema } from './objects/ImmunizationCreateInput.schema';
import { ImmunizationUncheckedCreateInputObjectSchema as ImmunizationUncheckedCreateInputObjectSchema } from './objects/ImmunizationUncheckedCreateInput.schema';
import { ImmunizationUpdateInputObjectSchema as ImmunizationUpdateInputObjectSchema } from './objects/ImmunizationUpdateInput.schema';
import { ImmunizationUncheckedUpdateInputObjectSchema as ImmunizationUncheckedUpdateInputObjectSchema } from './objects/ImmunizationUncheckedUpdateInput.schema';

export const ImmunizationUpsertOneSchema: z.ZodType<Prisma.ImmunizationUpsertArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema, create: z.union([ ImmunizationCreateInputObjectSchema, ImmunizationUncheckedCreateInputObjectSchema ]), update: z.union([ ImmunizationUpdateInputObjectSchema, ImmunizationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ImmunizationUpsertArgs>;

export const ImmunizationUpsertOneZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema, create: z.union([ ImmunizationCreateInputObjectSchema, ImmunizationUncheckedCreateInputObjectSchema ]), update: z.union([ ImmunizationUpdateInputObjectSchema, ImmunizationUncheckedUpdateInputObjectSchema ]) }).strict();