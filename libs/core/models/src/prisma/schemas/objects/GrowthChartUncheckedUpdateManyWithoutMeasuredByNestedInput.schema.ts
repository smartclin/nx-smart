import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartCreateWithoutMeasuredByInputObjectSchema as GrowthChartCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedCreateWithoutMeasuredByInput.schema';
import { GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema as GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateOrConnectWithoutMeasuredByInput.schema';
import { GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectSchema as GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectSchema } from './GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInput.schema';
import { MeasuredByGrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema as GrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema } from './GrowthChartCreateManyMeasuredByInputEnvelope.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectSchema as GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectSchema } from './GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInput.schema';
import { GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectSchema as GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectSchema } from './GrowthChartUpdateManyWithWhereWithoutMeasuredByInput.schema';
import { GrowthChartScalarWhereInputObjectSchema as GrowthChartScalarWhereInputObjectSchema } from './GrowthChartScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema).array(), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GrowthChartScalarWhereInputObjectSchema), z.lazy(() => GrowthChartScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GrowthChartUncheckedUpdateManyWithoutMeasuredByNestedInputObjectSchema: z.ZodType<Prisma.GrowthChartUncheckedUpdateManyWithoutMeasuredByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUncheckedUpdateManyWithoutMeasuredByNestedInput>;
export const GrowthChartUncheckedUpdateManyWithoutMeasuredByNestedInputObjectZodSchema = makeSchema();
