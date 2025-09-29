import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationCreateWithoutPatientInputObjectSchema as ImmunizationCreateWithoutPatientInputObjectSchema } from './ImmunizationCreateWithoutPatientInput.schema';
import { ImmunizationUncheckedCreateWithoutPatientInputObjectSchema as ImmunizationUncheckedCreateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedCreateWithoutPatientInput.schema';
import { ImmunizationCreateOrConnectWithoutPatientInputObjectSchema as ImmunizationCreateOrConnectWithoutPatientInputObjectSchema } from './ImmunizationCreateOrConnectWithoutPatientInput.schema';
import { ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectSchema as ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './ImmunizationUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientImmunizationCreateManyPatientInputEnvelopeObjectSchema as ImmunizationCreateManyPatientInputEnvelopeObjectSchema } from './ImmunizationCreateManyPatientInputEnvelope.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectSchema as ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './ImmunizationUpdateWithWhereUniqueWithoutPatientInput.schema';
import { ImmunizationUpdateManyWithWhereWithoutPatientInputObjectSchema as ImmunizationUpdateManyWithWhereWithoutPatientInputObjectSchema } from './ImmunizationUpdateManyWithWhereWithoutPatientInput.schema';
import { ImmunizationScalarWhereInputObjectSchema as ImmunizationScalarWhereInputObjectSchema } from './ImmunizationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImmunizationCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImmunizationCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImmunizationUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImmunizationScalarWhereInputObjectSchema), z.lazy(() => ImmunizationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImmunizationUncheckedUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.ImmunizationUncheckedUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUncheckedUpdateManyWithoutPatientNestedInput>;
export const ImmunizationUncheckedUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
