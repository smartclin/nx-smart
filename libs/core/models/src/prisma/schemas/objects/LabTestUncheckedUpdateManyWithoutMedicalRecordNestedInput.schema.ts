import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestCreateWithoutMedicalRecordInputObjectSchema as LabTestCreateWithoutMedicalRecordInputObjectSchema } from './LabTestCreateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInput.schema';
import { LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema as LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema } from './LabTestCreateOrConnectWithoutMedicalRecordInput.schema';
import { LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema as LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema } from './LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput.schema';
import { MedicalRecordLabTestCreateManyMedicalRecordInputEnvelopeObjectSchema as LabTestCreateManyMedicalRecordInputEnvelopeObjectSchema } from './LabTestCreateManyMedicalRecordInputEnvelope.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema as LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema } from './LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput.schema';
import { LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema as LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema } from './LabTestUpdateManyWithWhereWithoutMedicalRecordInput.schema';
import { LabTestScalarWhereInputObjectSchema as LabTestScalarWhereInputObjectSchema } from './LabTestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema).array(), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LabTestCreateManyMedicalRecordInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LabTestScalarWhereInputObjectSchema), z.lazy(() => LabTestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectSchema: z.ZodType<Prisma.LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInput>;
export const LabTestUncheckedUpdateManyWithoutMedicalRecordNestedInputObjectZodSchema = makeSchema();
