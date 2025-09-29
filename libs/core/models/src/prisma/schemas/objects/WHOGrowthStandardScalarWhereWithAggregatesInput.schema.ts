import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumGenderWithAggregatesFilterObjectSchema as EnumGenderWithAggregatesFilterObjectSchema } from './EnumGenderWithAggregatesFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumMeasurementTypeWithAggregatesFilterObjectSchema as EnumMeasurementTypeWithAggregatesFilterObjectSchema } from './EnumMeasurementTypeWithAggregatesFilter.schema';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const whogrowthstandardscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ageInMonths: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  gender: z.union([z.lazy(() => EnumGenderWithAggregatesFilterObjectSchema), GenderSchema]).optional(),
  measurementType: z.union([z.lazy(() => EnumMeasurementTypeWithAggregatesFilterObjectSchema), MeasurementTypeSchema]).optional(),
  lValue: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  mValue: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sValue: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd0: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd1neg: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd1pos: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd2neg: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd2pos: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd3neg: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd3pos: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  sd4neg: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  sd4pos: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WHOGrowthStandardScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardScalarWhereWithAggregatesInput> = whogrowthstandardscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WHOGrowthStandardScalarWhereWithAggregatesInput>;
export const WHOGrowthStandardScalarWhereWithAggregatesInputObjectZodSchema = whogrowthstandardscalarwherewithaggregatesinputSchema;
