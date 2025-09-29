import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema'

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
  measuredById: z.string().optional().nullable(),
  heightZScore: z.number().optional().nullable(),
  weightZScore: z.number().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict();
export const GrowthChartUncheckedCreateWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartUncheckedCreateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUncheckedCreateWithoutPatientInput>;
export const GrowthChartUncheckedCreateWithoutPatientInputObjectZodSchema = makeSchema();
