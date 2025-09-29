import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutGrowthChartsInputObjectSchema as PatientUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUpdateWithoutGrowthChartsInput.schema';
import { PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema as PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedUpdateWithoutGrowthChartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutGrowthChartsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutGrowthChartsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutGrowthChartsInput>;
export const PatientUpdateToOneWithWhereWithoutGrowthChartsInputObjectZodSchema = makeSchema();
