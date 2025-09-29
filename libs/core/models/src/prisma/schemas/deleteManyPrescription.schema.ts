import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './objects/PrescriptionWhereInput.schema';

export const PrescriptionDeleteManySchema: z.ZodType<Prisma.PrescriptionDeleteManyArgs> = z.object({ where: PrescriptionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionDeleteManyArgs>;

export const PrescriptionDeleteManyZodSchema = z.object({ where: PrescriptionWhereInputObjectSchema.optional() }).strict();