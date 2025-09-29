import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutPatientInputObjectSchema as MedicalRecordsCreateWithoutPatientInputObjectSchema } from './MedicalRecordsCreateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInput.schema';
import { MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema as MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutPatientInput.schema';
import { PatientMedicalRecordsCreateManyPatientInputEnvelopeObjectSchema as MedicalRecordsCreateManyPatientInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyPatientInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsUncheckedCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUncheckedCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUncheckedCreateNestedManyWithoutPatientInput>;
export const MedicalRecordsUncheckedCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
