import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisCreateWithoutDoctorInputObjectSchema as DiagnosisCreateWithoutDoctorInputObjectSchema } from './DiagnosisCreateWithoutDoctorInput.schema';
import { DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema as DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedCreateWithoutDoctorInput.schema';
import { DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema as DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema } from './DiagnosisCreateOrConnectWithoutDoctorInput.schema';
import { DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DiagnosisUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorDiagnosisCreateManyDoctorInputEnvelopeObjectSchema as DiagnosisCreateManyDoctorInputEnvelopeObjectSchema } from './DiagnosisCreateManyDoctorInputEnvelope.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DiagnosisUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectSchema as DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DiagnosisUpdateManyWithWhereWithoutDoctorInput.schema';
import { DiagnosisScalarWhereInputObjectSchema as DiagnosisScalarWhereInputObjectSchema } from './DiagnosisScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiagnosisCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DiagnosisScalarWhereInputObjectSchema), z.lazy(() => DiagnosisScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DiagnosisUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateManyWithoutDoctorNestedInput>;
export const DiagnosisUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
