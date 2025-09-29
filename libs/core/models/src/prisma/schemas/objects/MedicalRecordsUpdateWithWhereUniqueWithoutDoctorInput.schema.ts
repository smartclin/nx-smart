import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutDoctorInputObjectSchema as MedicalRecordsUpdateWithoutDoctorInputObjectSchema } from './MedicalRecordsUpdateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInput>;
export const MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
