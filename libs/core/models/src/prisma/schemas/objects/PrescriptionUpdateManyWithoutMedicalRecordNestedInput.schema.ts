import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutMedicalRecordInputObjectSchema as PrescriptionCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInput.schema';
import { PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema as PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateOrConnectWithoutMedicalRecordInput.schema';
import { PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema as PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema } from './PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput.schema';
import { MedicalRecordPrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema as PrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema } from './PrescriptionCreateManyMedicalRecordInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema as PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema } from './PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput.schema';
import { PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema as PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema } from './PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput.schema';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PrescriptionScalarWhereInputObjectSchema), z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionUpdateManyWithoutMedicalRecordNestedInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithoutMedicalRecordNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithoutMedicalRecordNestedInput>;
export const PrescriptionUpdateManyWithoutMedicalRecordNestedInputObjectZodSchema = makeSchema();
