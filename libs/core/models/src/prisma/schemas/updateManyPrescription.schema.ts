import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionUpdateManyMutationInputObjectSchema as PrescriptionUpdateManyMutationInputObjectSchema } from './objects/PrescriptionUpdateManyMutationInput.schema';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './objects/PrescriptionWhereInput.schema';

export const PrescriptionUpdateManySchema: z.ZodType<Prisma.PrescriptionUpdateManyArgs> = z.object({ data: PrescriptionUpdateManyMutationInputObjectSchema, where: PrescriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyArgs>;

export const PrescriptionUpdateManyZodSchema = z.object({ data: PrescriptionUpdateManyMutationInputObjectSchema, where: PrescriptionWhereInputObjectSchema.optional() }).strict();