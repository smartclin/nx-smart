import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutDoctorInputObjectSchema as MedicalRecordsUpdateWithoutDoctorInputObjectSchema } from './MedicalRecordsUpdateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutDoctorInput.schema';
import { MedicalRecordsCreateWithoutDoctorInputObjectSchema as MedicalRecordsCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInput>;
export const MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
