import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './objects/PrescriptionInclude.schema';
import { PrescriptionCreateInputObjectSchema as PrescriptionCreateInputObjectSchema } from './objects/PrescriptionCreateInput.schema';
import { PrescriptionUncheckedCreateInputObjectSchema as PrescriptionUncheckedCreateInputObjectSchema } from './objects/PrescriptionUncheckedCreateInput.schema';

export const PrescriptionCreateOneSchema: z.ZodType<Prisma.PrescriptionCreateArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), data: z.union([PrescriptionCreateInputObjectSchema, PrescriptionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PrescriptionCreateArgs>;

export const PrescriptionCreateOneZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), data: z.union([PrescriptionCreateInputObjectSchema, PrescriptionUncheckedCreateInputObjectSchema]) }).strict();