import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumGenderNullableWithAggregatesFilterObjectSchema as EnumGenderNullableWithAggregatesFilterObjectSchema } from './EnumGenderNullableWithAggregatesFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const growthchartscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GrowthChartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GrowthChartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GrowthChartScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GrowthChartScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GrowthChartScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  gender: z.union([z.lazy(() => EnumGenderNullableWithAggregatesFilterObjectSchema), GenderSchema]).optional().nullable(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  ageInDays: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  weight: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  headCircumference: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  percentileHeight: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  percentileWeight: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  percentileHead: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  measuredById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  heightZScore: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  weightZScore: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const GrowthChartScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GrowthChartScalarWhereWithAggregatesInput> = growthchartscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GrowthChartScalarWhereWithAggregatesInput>;
export const GrowthChartScalarWhereWithAggregatesInputObjectZodSchema = growthchartscalarwherewithaggregatesinputSchema;
