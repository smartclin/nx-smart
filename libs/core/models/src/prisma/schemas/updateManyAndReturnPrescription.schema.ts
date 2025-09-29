import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionSelectObjectSchema as PrescriptionSelectObjectSchema } from './objects/PrescriptionSelect.schema';
import { PrescriptionUpdateManyMutationInputObjectSchema as PrescriptionUpdateManyMutationInputObjectSchema } from './objects/PrescriptionUpdateManyMutationInput.schema';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './objects/PrescriptionWhereInput.schema';

export const PrescriptionUpdateManyAndReturnSchema: z.ZodType<Prisma.PrescriptionUpdateManyAndReturnArgs> = z.object({ select: PrescriptionSelectObjectSchema.optional(), data: PrescriptionUpdateManyMutationInputObjectSchema, where: PrescriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyAndReturnArgs>;

export const PrescriptionUpdateManyAndReturnZodSchema = z.object({ select: PrescriptionSelectObjectSchema.optional(), data: PrescriptionUpdateManyMutationInputObjectSchema, where: PrescriptionWhereInputObjectSchema.optional() }).strict();