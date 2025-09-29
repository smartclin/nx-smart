import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './objects/PrescriptionInclude.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './objects/PrescriptionWhereUniqueInput.schema';
import { PrescriptionCreateInputObjectSchema as PrescriptionCreateInputObjectSchema } from './objects/PrescriptionCreateInput.schema';
import { PrescriptionUncheckedCreateInputObjectSchema as PrescriptionUncheckedCreateInputObjectSchema } from './objects/PrescriptionUncheckedCreateInput.schema';
import { PrescriptionUpdateInputObjectSchema as PrescriptionUpdateInputObjectSchema } from './objects/PrescriptionUpdateInput.schema';
import { PrescriptionUncheckedUpdateInputObjectSchema as PrescriptionUncheckedUpdateInputObjectSchema } from './objects/PrescriptionUncheckedUpdateInput.schema';

export const PrescriptionUpsertOneSchema: z.ZodType<Prisma.PrescriptionUpsertArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), where: PrescriptionWhereUniqueInputObjectSchema, create: z.union([ PrescriptionCreateInputObjectSchema, PrescriptionUncheckedCreateInputObjectSchema ]), update: z.union([ PrescriptionUpdateInputObjectSchema, PrescriptionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PrescriptionUpsertArgs>;

export const PrescriptionUpsertOneZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), where: PrescriptionWhereUniqueInputObjectSchema, create: z.union([ PrescriptionCreateInputObjectSchema, PrescriptionUncheckedCreateInputObjectSchema ]), update: z.union([ PrescriptionUpdateInputObjectSchema, PrescriptionUncheckedUpdateInputObjectSchema ]) }).strict();