import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';

export const DoctorDeleteManySchema: z.ZodType<Prisma.DoctorDeleteManyArgs> = z.object({ where: DoctorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorDeleteManyArgs>;

export const DoctorDeleteManyZodSchema = z.object({ where: DoctorWhereInputObjectSchema.optional() }).strict();