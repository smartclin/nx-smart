import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartUpdateWithoutPatientInputObjectSchema as GrowthChartUpdateWithoutPatientInputObjectSchema } from './GrowthChartUpdateWithoutPatientInput.schema';
import { GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema as GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedUpdateWithoutPatientInput.schema';
import { GrowthChartCreateWithoutPatientInputObjectSchema as GrowthChartCreateWithoutPatientInputObjectSchema } from './GrowthChartCreateWithoutPatientInput.schema';
import { GrowthChartUncheckedCreateWithoutPatientInputObjectSchema as GrowthChartUncheckedCreateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GrowthChartUpdateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpsertWithWhereUniqueWithoutPatientInput>;
export const GrowthChartUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
