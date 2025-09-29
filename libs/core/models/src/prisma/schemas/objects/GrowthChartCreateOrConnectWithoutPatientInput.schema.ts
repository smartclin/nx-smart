import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema';
import { GrowthChartCreateWithoutPatientInputObjectSchema as GrowthChartCreateWithoutPatientInputObjectSchema } from './GrowthChartCreateWithoutPatientInput.schema';
import { GrowthChartUncheckedCreateWithoutPatientInputObjectSchema as GrowthChartUncheckedCreateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const GrowthChartCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateOrConnectWithoutPatientInput>;
export const GrowthChartCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
