import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutMedicalInputObjectSchema as PatientUpdateWithoutMedicalInputObjectSchema } from './PatientUpdateWithoutMedicalInput.schema';
import { PatientUncheckedUpdateWithoutMedicalInputObjectSchema as PatientUncheckedUpdateWithoutMedicalInputObjectSchema } from './PatientUncheckedUpdateWithoutMedicalInput.schema';
import { PatientCreateWithoutMedicalInputObjectSchema as PatientCreateWithoutMedicalInputObjectSchema } from './PatientCreateWithoutMedicalInput.schema';
import { PatientUncheckedCreateWithoutMedicalInputObjectSchema as PatientUncheckedCreateWithoutMedicalInputObjectSchema } from './PatientUncheckedCreateWithoutMedicalInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutMedicalInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutMedicalInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutMedicalInput>;
export const PatientUpsertWithoutMedicalInputObjectZodSchema = makeSchema();
