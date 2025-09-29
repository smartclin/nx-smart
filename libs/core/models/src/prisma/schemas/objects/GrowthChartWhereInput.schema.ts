import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGenderNullableFilterObjectSchema as EnumGenderNullableFilterObjectSchema } from './EnumGenderNullableFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { StaffNullableScalarRelationFilterObjectSchema as StaffNullableScalarRelationFilterObjectSchema } from './StaffNullableScalarRelationFilter.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const growthchartwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GrowthChartWhereInputObjectSchema), z.lazy(() => GrowthChartWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GrowthChartWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GrowthChartWhereInputObjectSchema), z.lazy(() => GrowthChartWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  gender: z.union([z.lazy(() => EnumGenderNullableFilterObjectSchema), GenderSchema]).optional().nullable(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ageInDays: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  weight: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  headCircumference: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  percentileHeight: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  percentileWeight: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  percentileHead: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  measuredById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  heightZScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  weightZScore: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  measuredBy: z.union([z.lazy(() => StaffNullableScalarRelationFilterObjectSchema), z.lazy(() => StaffWhereInputObjectSchema)]).optional()
}).strict();
export const GrowthChartWhereInputObjectSchema: z.ZodType<Prisma.GrowthChartWhereInput> = growthchartwhereinputSchema as unknown as z.ZodType<Prisma.GrowthChartWhereInput>;
export const GrowthChartWhereInputObjectZodSchema = growthchartwhereinputSchema;
