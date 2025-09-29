import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithoutPatientInputObjectSchema as GrowthChartUpdateWithoutPatientInputObjectSchema } from './GrowthChartUpdateWithoutPatientInput.schema';
import { GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema as GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GrowthChartUpdateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpdateWithWhereUniqueWithoutPatientInput>;
export const GrowthChartUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
