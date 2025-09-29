import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithoutMeasuredByInputObjectSchema as GrowthChartUpdateWithoutMeasuredByInputObjectSchema } from './GrowthChartUpdateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedUpdateWithoutMeasuredByInput.schema';
import { GrowthChartCreateWithoutMeasuredByInputObjectSchema as GrowthChartCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedCreateWithoutMeasuredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GrowthChartUpdateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema)]),
  create: z.union([z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema)])
}).strict();
export const GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInput>;
export const GrowthChartUpsertWithWhereUniqueWithoutMeasuredByInputObjectZodSchema = makeSchema();
