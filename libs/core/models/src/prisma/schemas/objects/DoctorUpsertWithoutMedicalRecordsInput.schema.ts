import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUpdateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedUpdateWithoutMedicalRecordsInput.schema';
import { DoctorCreateWithoutMedicalRecordsInputObjectSchema as DoctorCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedCreateWithoutMedicalRecordsInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutMedicalRecordsInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutMedicalRecordsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutMedicalRecordsInput>;
export const DoctorUpsertWithoutMedicalRecordsInputObjectZodSchema = makeSchema();
