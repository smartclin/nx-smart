import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutGrowthChartsInputObjectSchema as PatientCreateWithoutGrowthChartsInputObjectSchema } from './PatientCreateWithoutGrowthChartsInput.schema';
import { PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema as PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedCreateWithoutGrowthChartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutGrowthChartsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutGrowthChartsInput>;
export const PatientCreateOrConnectWithoutGrowthChartsInputObjectZodSchema = makeSchema();
