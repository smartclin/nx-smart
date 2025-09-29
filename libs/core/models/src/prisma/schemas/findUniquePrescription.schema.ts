import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './objects/PrescriptionInclude.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './objects/PrescriptionWhereUniqueInput.schema';

export const PrescriptionFindUniqueSchema: z.ZodType<Prisma.PrescriptionFindUniqueArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), where: PrescriptionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PrescriptionFindUniqueArgs>;

export const PrescriptionFindUniqueZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), include: PrescriptionIncludeObjectSchema.optional(), where: PrescriptionWhereUniqueInputObjectSchema }).strict();