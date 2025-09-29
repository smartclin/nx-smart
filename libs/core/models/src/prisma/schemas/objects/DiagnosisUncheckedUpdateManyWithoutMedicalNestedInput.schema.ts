import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisCreateWithoutMedicalInputObjectSchema as DiagnosisCreateWithoutMedicalInputObjectSchema } from './DiagnosisCreateWithoutMedicalInput.schema';
import { DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema as DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedCreateWithoutMedicalInput.schema';
import { DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema as DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema } from './DiagnosisCreateOrConnectWithoutMedicalInput.schema';
import { DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectSchema as DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectSchema } from './DiagnosisUpsertWithWhereUniqueWithoutMedicalInput.schema';
import { MedicalDiagnosisCreateManyMedicalInputEnvelopeObjectSchema as DiagnosisCreateManyMedicalInputEnvelopeObjectSchema } from './DiagnosisCreateManyMedicalInputEnvelope.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectSchema as DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectSchema } from './DiagnosisUpdateWithWhereUniqueWithoutMedicalInput.schema';
import { DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectSchema as DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectSchema } from './DiagnosisUpdateManyWithWhereWithoutMedicalInput.schema';
import { DiagnosisScalarWhereInputObjectSchema as DiagnosisScalarWhereInputObjectSchema } from './DiagnosisScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiagnosisCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DiagnosisScalarWhereInputObjectSchema), z.lazy(() => DiagnosisScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputObjectSchema: z.ZodType<Prisma.DiagnosisUncheckedUpdateManyWithoutMedicalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUncheckedUpdateManyWithoutMedicalNestedInput>;
export const DiagnosisUncheckedUpdateManyWithoutMedicalNestedInputObjectZodSchema = makeSchema();
