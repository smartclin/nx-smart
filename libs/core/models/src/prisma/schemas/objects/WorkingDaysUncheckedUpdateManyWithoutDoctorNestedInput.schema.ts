import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysCreateWithoutDoctorInputObjectSchema as WorkingDaysCreateWithoutDoctorInputObjectSchema } from './WorkingDaysCreateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInput.schema';
import { WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema as WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema } from './WorkingDaysCreateOrConnectWithoutDoctorInput.schema';
import { WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectSchema as WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './WorkingDaysUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorWorkingDaysCreateManyDoctorInputEnvelopeObjectSchema as WorkingDaysCreateManyDoctorInputEnvelopeObjectSchema } from './WorkingDaysCreateManyDoctorInputEnvelope.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectSchema as WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './WorkingDaysUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectSchema as WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './WorkingDaysUpdateManyWithWhereWithoutDoctorInput.schema';
import { WorkingDaysScalarWhereInputObjectSchema as WorkingDaysScalarWhereInputObjectSchema } from './WorkingDaysScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkingDaysCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema), z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema), z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema), z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema), z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkingDaysScalarWhereInputObjectSchema), z.lazy(() => WorkingDaysScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInput>;
export const WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
