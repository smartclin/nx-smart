import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartScalarWhereInputObjectSchema as GrowthChartScalarWhereInputObjectSchema } from './GrowthChartScalarWhereInput.schema';
import { GrowthChartUpdateManyMutationInputObjectSchema as GrowthChartUpdateManyMutationInputObjectSchema } from './GrowthChartUpdateManyMutationInput.schema';
import { GrowthChartUncheckedUpdateManyWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedUpdateManyWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedUpdateManyWithoutMeasuredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GrowthChartUpdateManyMutationInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateManyWithoutMeasuredByInputObjectSchema)])
}).strict();
export const GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartUpdateManyWithWhereWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpdateManyWithWhereWithoutMeasuredByInput>;
export const GrowthChartUpdateManyWithWhereWithoutMeasuredByInputObjectZodSchema = makeSchema();
