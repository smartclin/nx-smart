import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './objects/PrescriptionInclude.schema';
import { PrescriptionUpdateInputObjectSchema as PrescriptionUpdateInputObjectSchema } from './objects/PrescriptionUpdateInput.schema';
import { PrescriptionUncheckedUpdateInputObjectSchema as PrescriptionUncheckedUpdateInputObjectSchema } from './objects/PrescriptionUncheckedUpdateInput.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './objects/PrescriptionWhereUniqueInput.schema';

export const PrescriptionUpdateOneSchema: z.ZodType<Prisma.PrescriptionUpdateArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), data: z.union([PrescriptionUpdateInputObjectSchema, PrescriptionUncheckedUpdateInputObjectSchema]), where: PrescriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PrescriptionUpdateArgs>;

export const PrescriptionUpdateOneZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), data: z.union([PrescriptionUpdateInputObjectSchema, PrescriptionUncheckedUpdateInputObjectSchema]), where: PrescriptionWhereUniqueInputObjectSchema }).strict();