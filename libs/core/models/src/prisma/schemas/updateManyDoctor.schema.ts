import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorUpdateManyMutationInputObjectSchema as DoctorUpdateManyMutationInputObjectSchema } from './objects/DoctorUpdateManyMutationInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';

export const DoctorUpdateManySchema: z.ZodType<Prisma.DoctorUpdateManyArgs> = z.object({ data: DoctorUpdateManyMutationInputObjectSchema, where: DoctorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorUpdateManyArgs>;

export const DoctorUpdateManyZodSchema = z.object({ data: DoctorUpdateManyMutationInputObjectSchema, where: DoctorWhereInputObjectSchema.optional() }).strict();