import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithoutMeasuredByInputObjectSchema as GrowthChartUpdateWithoutMeasuredByInputObjectSchema } from './GrowthChartUpdateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedUpdateWithoutMeasuredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GrowthChartUpdateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateWithoutMeasuredByInputObjectSchema)])
}).strict();
export const GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInput>;
export const GrowthChartUpdateWithWhereUniqueWithoutMeasuredByInputObjectZodSchema = makeSchema();
