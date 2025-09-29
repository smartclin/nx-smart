import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutGrowthChartsInputObjectSchema as PatientUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUpdateWithoutGrowthChartsInput.schema';
import { PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema as PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedUpdateWithoutGrowthChartsInput.schema';
import { PatientCreateWithoutGrowthChartsInputObjectSchema as PatientCreateWithoutGrowthChartsInputObjectSchema } from './PatientCreateWithoutGrowthChartsInput.schema';
import { PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema as PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedCreateWithoutGrowthChartsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutGrowthChartsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutGrowthChartsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutGrowthChartsInput>;
export const PatientUpsertWithoutGrowthChartsInputObjectZodSchema = makeSchema();
