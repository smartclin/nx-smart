import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutPatientInputObjectSchema as MedicalRecordsCreateWithoutPatientInputObjectSchema } from './MedicalRecordsCreateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInput.schema';
import { MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema as MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutPatientInput.schema';
import { MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectSchema as MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './MedicalRecordsUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientMedicalRecordsCreateManyPatientInputEnvelopeObjectSchema as MedicalRecordsCreateManyPatientInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyPatientInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectSchema as MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './MedicalRecordsUpdateWithWhereUniqueWithoutPatientInput.schema';
import { MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectSchema as MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectSchema } from './MedicalRecordsUpdateManyWithWhereWithoutPatientInput.schema';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutPatientNestedInput>;
export const MedicalRecordsUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
