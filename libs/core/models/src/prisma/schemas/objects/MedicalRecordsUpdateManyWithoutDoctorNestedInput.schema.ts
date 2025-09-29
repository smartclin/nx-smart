import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutDoctorInputObjectSchema as MedicalRecordsCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateWithoutDoctorInput.schema';
import { MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutDoctorInput.schema';
import { MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema as MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutDoctorInput.schema';
import { MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorMedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema as MedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema } from './MedicalRecordsCreateManyDoctorInputEnvelope.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectSchema as MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './MedicalRecordsUpdateManyWithWhereWithoutDoctorInput.schema';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema), z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MedicalRecordsUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithoutDoctorNestedInput>;
export const MedicalRecordsUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
