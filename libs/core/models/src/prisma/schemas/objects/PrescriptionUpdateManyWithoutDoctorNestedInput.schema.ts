import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutDoctorInputObjectSchema as PrescriptionCreateWithoutDoctorInputObjectSchema } from './PrescriptionCreateWithoutDoctorInput.schema';
import { PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema as PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedCreateWithoutDoctorInput.schema';
import { PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema as PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema } from './PrescriptionCreateOrConnectWithoutDoctorInput.schema';
import { PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './PrescriptionUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorPrescriptionCreateManyDoctorInputEnvelopeObjectSchema as PrescriptionCreateManyDoctorInputEnvelopeObjectSchema } from './PrescriptionCreateManyDoctorInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './PrescriptionUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectSchema as PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './PrescriptionUpdateManyWithWhereWithoutDoctorInput.schema';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PrescriptionScalarWhereInputObjectSchema), z.lazy(() => PrescriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithoutDoctorNestedInput>;
export const PrescriptionUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
