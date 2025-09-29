import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumGenderFilterObjectSchema as EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { EnumMeasurementTypeFilterObjectSchema as EnumMeasurementTypeFilterObjectSchema } from './EnumMeasurementTypeFilter.schema';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const whogrowthstandardwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WHOGrowthStandardWhereInputObjectSchema), z.lazy(() => WHOGrowthStandardWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WHOGrowthStandardWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WHOGrowthStandardWhereInputObjectSchema), z.lazy(() => WHOGrowthStandardWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ageInMonths: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gender: z.union([z.lazy(() => EnumGenderFilterObjectSchema), GenderSchema]).optional(),
  measurementType: z.union([z.lazy(() => EnumMeasurementTypeFilterObjectSchema), MeasurementTypeSchema]).optional(),
  lValue: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  mValue: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sValue: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd0: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd1neg: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd1pos: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd2neg: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd2pos: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd3neg: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd3pos: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  sd4neg: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  sd4pos: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WHOGrowthStandardWhereInputObjectSchema: z.ZodType<Prisma.WHOGrowthStandardWhereInput> = whogrowthstandardwhereinputSchema as unknown as z.ZodType<Prisma.WHOGrowthStandardWhereInput>;
export const WHOGrowthStandardWhereInputObjectZodSchema = whogrowthstandardwhereinputSchema;
