import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartCreateWithoutMeasuredByInputObjectSchema as GrowthChartCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartCreateWithoutMeasuredByInput.schema';
import { GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema as GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema } from './GrowthChartUncheckedCreateWithoutMeasuredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GrowthChartCreateWithoutMeasuredByInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutMeasuredByInputObjectSchema)])
}).strict();
export const GrowthChartCreateOrConnectWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartCreateOrConnectWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateOrConnectWithoutMeasuredByInput>;
export const GrowthChartCreateOrConnectWithoutMeasuredByInputObjectZodSchema = makeSchema();
