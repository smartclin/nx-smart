import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './objects/LabTestWhereInput.schema';

export const LabTestDeleteManySchema: z.ZodType<Prisma.LabTestDeleteManyArgs> = z.object({ where: LabTestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LabTestDeleteManyArgs>;

export const LabTestDeleteManyZodSchema = z.object({ where: LabTestWhereInputObjectSchema.optional() }).strict();