import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsCreateWithoutMedicalInputObjectSchema as VitalSignsCreateWithoutMedicalInputObjectSchema } from './VitalSignsCreateWithoutMedicalInput.schema';
import { VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema as VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedCreateWithoutMedicalInput.schema';
import { VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema as VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema } from './VitalSignsCreateOrConnectWithoutMedicalInput.schema';
import { VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectSchema as VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectSchema } from './VitalSignsUpsertWithWhereUniqueWithoutMedicalInput.schema';
import { MedicalVitalSignsCreateManyMedicalInputEnvelopeObjectSchema as VitalSignsCreateManyMedicalInputEnvelopeObjectSchema } from './VitalSignsCreateManyMedicalInputEnvelope.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectSchema as VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectSchema } from './VitalSignsUpdateWithWhereUniqueWithoutMedicalInput.schema';
import { VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectSchema as VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectSchema } from './VitalSignsUpdateManyWithWhereWithoutMedicalInput.schema';
import { VitalSignsScalarWhereInputObjectSchema as VitalSignsScalarWhereInputObjectSchema } from './VitalSignsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VitalSignsCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VitalSignsScalarWhereInputObjectSchema), z.lazy(() => VitalSignsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VitalSignsUpdateManyWithoutMedicalNestedInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithoutMedicalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyWithoutMedicalNestedInput>;
export const VitalSignsUpdateManyWithoutMedicalNestedInputObjectZodSchema = makeSchema();
