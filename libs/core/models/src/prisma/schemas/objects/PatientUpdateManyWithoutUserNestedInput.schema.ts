import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutUserInputObjectSchema as PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema';
import { PatientUncheckedCreateWithoutUserInputObjectSchema as PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema';
import { PatientCreateOrConnectWithoutUserInputObjectSchema as PatientCreateOrConnectWithoutUserInputObjectSchema } from './PatientCreateOrConnectWithoutUserInput.schema';
import { PatientUpsertWithWhereUniqueWithoutUserInputObjectSchema as PatientUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PatientUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserPatientCreateManyUserInputEnvelopeObjectSchema as PatientCreateManyUserInputEnvelopeObjectSchema } from './PatientCreateManyUserInputEnvelope.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateWithWhereUniqueWithoutUserInputObjectSchema as PatientUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PatientUpdateWithWhereUniqueWithoutUserInput.schema';
import { PatientUpdateManyWithWhereWithoutUserInputObjectSchema as PatientUpdateManyWithWhereWithoutUserInputObjectSchema } from './PatientUpdateManyWithWhereWithoutUserInput.schema';
import { PatientScalarWhereInputObjectSchema as PatientScalarWhereInputObjectSchema } from './PatientScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutUserInputObjectSchema), z.lazy(() => PatientCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PatientCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PatientUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PatientUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema), z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema), z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema), z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema), z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PatientUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PatientUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PatientUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PatientUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PatientScalarWhereInputObjectSchema), z.lazy(() => PatientScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PatientUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateManyWithoutUserNestedInput>;
export const PatientUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
