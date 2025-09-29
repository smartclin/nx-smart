import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PatientScalarRelationFilterObjectSchema as PatientScalarRelationFilterObjectSchema } from './PatientScalarRelationFilter.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { StaffNullableScalarRelationFilterObjectSchema as StaffNullableScalarRelationFilterObjectSchema } from './StaffNullableScalarRelationFilter.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const immunizationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImmunizationWhereInputObjectSchema), z.lazy(() => ImmunizationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImmunizationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImmunizationWhereInputObjectSchema), z.lazy(() => ImmunizationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vaccine: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dose: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lotNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  administeredByStaffId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  patient: z.union([z.lazy(() => PatientScalarRelationFilterObjectSchema), z.lazy(() => PatientWhereInputObjectSchema)]).optional(),
  administeredBy: z.union([z.lazy(() => StaffNullableScalarRelationFilterObjectSchema), z.lazy(() => StaffWhereInputObjectSchema)]).optional()
}).strict();
export const ImmunizationWhereInputObjectSchema: z.ZodType<Prisma.ImmunizationWhereInput> = immunizationwhereinputSchema as unknown as z.ZodType<Prisma.ImmunizationWhereInput>;
export const ImmunizationWhereInputObjectZodSchema = immunizationwhereinputSchema;
