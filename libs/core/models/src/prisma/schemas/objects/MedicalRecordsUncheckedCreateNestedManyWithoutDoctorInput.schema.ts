import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutDoctorInputObjectSchema as MedicalRecordsCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDoctorInput.schema';
import { MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema as MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutDoctorInput.schema';
import { DoctorMedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema as MedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyDoctorInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInput>;
export const MedicalRecordsUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
