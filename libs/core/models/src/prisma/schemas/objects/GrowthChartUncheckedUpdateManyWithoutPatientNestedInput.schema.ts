import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartCreateWithoutPatientInputObjectSchema as GrowthChartCreateWithoutPatientInputObjectSchema } from './GrowthChartCreateWithoutPatientInput.schema';
import { GrowthChartUncheckedCreateWithoutPatientInputObjectSchema as GrowthChartUncheckedCreateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedCreateWithoutPatientInput.schema';
import { GrowthChartCreateOrConnectWithoutPatientInputObjectSchema as GrowthChartCreateOrConnectWithoutPatientInputObjectSchema } from './GrowthChartCreateOrConnectWithoutPatientInput.schema';
import { GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectSchema as GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './GrowthChartUpsertWithWhereUniqueWithoutPatientInput.schema';
import { PatientGrowthChartCreateManyPatientInputEnvelopeObjectSchema as GrowthChartCreateManyPatientInputEnvelopeObjectSchema } from './GrowthChartCreateManyPatientInputEnvelope.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectSchema as GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './GrowthChartUpdateWithWhereUniqueWithoutPatientInput.schema';
import { GrowthChartUpdateManyWithWhereWithoutPatientInputObjectSchema as GrowthChartUpdateManyWithWhereWithoutPatientInputObjectSchema } from './GrowthChartUpdateManyWithWhereWithoutPatientInput.schema';
import { GrowthChartScalarWhereInputObjectSchema as GrowthChartScalarWhereInputObjectSchema } from './GrowthChartScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GrowthChartCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GrowthChartCreateManyPatientInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GrowthChartUpdateManyWithWhereWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUpdateManyWithWhereWithoutPatientInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GrowthChartScalarWhereInputObjectSchema), z.lazy(() => GrowthChartScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GrowthChartUncheckedUpdateManyWithoutPatientNestedInputObjectSchema: z.ZodType<Prisma.GrowthChartUncheckedUpdateManyWithoutPatientNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUncheckedUpdateManyWithoutPatientNestedInput>;
export const GrowthChartUncheckedUpdateManyWithoutPatientNestedInputObjectZodSchema = makeSchema();
