import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './objects/ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';

export const ImmunizationFindUniqueOrThrowSchema: z.ZodType<Prisma.ImmunizationFindUniqueOrThrowArgs> = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ImmunizationFindUniqueOrThrowArgs>;

export const ImmunizationFindUniqueOrThrowZodSchema = z.object({ select: ImmunizationSelectObjectSchema.optional(), include: ImmunizationIncludeObjectSchema.optional(), where: ImmunizationWhereUniqueInputObjectSchema }).strict();