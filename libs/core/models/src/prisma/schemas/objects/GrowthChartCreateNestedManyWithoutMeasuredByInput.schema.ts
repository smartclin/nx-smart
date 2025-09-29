import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartCreateWithoutMeasuredByInputObjectSchema as GrowthChartCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedCreateWithoutMeasuredByInput.schema';
import { GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema as GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateOrConnectWithoutMeasuredByInput.schema';
import { MeasuredByGrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema as GrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema } from './GrowthChartCreateManyMeasuredByInputEnvelope.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema).array(), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GrowthChartCreateNestedManyWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartCreateNestedManyWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateNestedManyWithoutMeasuredByInput>;
export const GrowthChartCreateNestedManyWithoutMeasuredByInputObjectZodSchema = makeSchema();
