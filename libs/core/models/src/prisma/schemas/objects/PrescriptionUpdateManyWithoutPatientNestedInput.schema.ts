import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutPatientInputObjectSchema as PrescriptionCreateWithoutPatientInputObjectSchema } from './PrescriptionCreateWithoutPatientInput.schema';
import { PrescriptionUncheckedCreateWithoutPatientInputObjectSchema as PrescriptionUncheckedCreateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedCreateWithoutPatientInput.schema';
import { PrescriptionCreateOrConnectWithoutPatientInputObjectSchema as PrescriptionCreateOrConnectWithoutPatientInputObjectSchema } from './PrescriptionCreateOrConnectWithoutPatientInput.schema';
import { PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectSchema as PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './PrescriptionUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientPrescriptionCreateManyPatientInputEnvelopeObjectSchema as PrescriptionCreateManyPatientInputEnvelopeObjectSchema } from './PrescriptionCreateManyPatientInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectSchema as PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './PrescriptionUpdateWithWhereUniqueWithoutPatientInput.schema';
import { PrescriptionUpdateManyWithWhereWithoutPatientInputObjectSchema as PrescriptionUpdateManyWithWhereWithoutPatientInputObjectSchema } from './PrescriptionUpdateManyWithWhereWithoutPatientInput.schema';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PrescriptionUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PrescriptionScalarWhereInputObjectSchema), z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithoutPatientNestedInput>;
export const PrescriptionUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
