import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  ageInMonths: z.number().int(),
  gender: GenderSchema,
  measurementType: MeasurementTypeSchema,
  lValue: z.number(),
  mValue: z.number(),
  sValue: z.number(),
  sd0: z.number(),
  sd1neg: z.number(),
  sd1pos: z.number(),
  sd2neg: z.number(),
  sd2pos: z.number(),
  sd3neg: z.number(),
  sd3pos: z.number(),
  sd4neg: z.number().optional().nullable(),
  sd4pos: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WHOGrowthStandardCreateManyInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WHOGrowthStandardCreateManyInput>;
export const WHOGrowthStandardCreateManyInputObjectZodSchema = makeSchema();
