import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutDoctorInputObjectSchema as MedicalRecordsCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutDoctorInput>;
export const MedicalRecordsCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
