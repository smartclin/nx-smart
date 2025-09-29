import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { PatientCreateNestedOneWithoutGrowthChartsInputObjectSchema as PatientCreateNestedOneWithoutGrowthChartsInputObjectSchema } from './PatientCreateNestedOneWithoutGrowthChartsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  gender: GenderSchema.optional().nullable(),
  date: z.coerce.date().optional(),
  ageInDays: z.number().int(),
  height: z.number(),
  weight: z.number(),
  headCircumference: z.number().optional().nullable(),
  percentileHeight: z.number().optional().nullable(),
  percentileWeight: z.number().optional().nullable(),
  percentileHead: z.number().optional().nullable(),
  heightZScore: z.number().optional().nullable(),
  weightZScore: z.number().optional().nullable(),
  notes: z.string().optional().nullable(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutGrowthChartsInputObjectSchema)
}).strict();
export const GrowthChartCreateWithoutMeasuredByInputObjectSchema: z.ZodType<Prisma.GrowthChartCreateWithoutMeasuredByInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateWithoutMeasuredByInput>;
export const GrowthChartCreateWithoutMeasuredByInputObjectZodSchema = makeSchema();
