import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientUpdateManyMutationInputObjectSchema as PatientUpdateManyMutationInputObjectSchema } from './objects/PatientUpdateManyMutationInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema';

export const PatientUpdateManySchema: z.ZodType<Prisma.PatientUpdateManyArgs> = z.object({ data: PatientUpdateManyMutationInputObjectSchema, where: PatientWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PatientUpdateManyArgs>;

export const PatientUpdateManyZodSchema = z.object({ data: PatientUpdateManyMutationInputObjectSchema, where: PatientWhereInputObjectSchema.optional() }).strict();