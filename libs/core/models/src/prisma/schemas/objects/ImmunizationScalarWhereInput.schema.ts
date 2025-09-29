import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const immunizationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImmunizationScalarWhereInputObjectSchema), z.lazy(() => ImmunizationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImmunizationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImmunizationScalarWhereInputObjectSchema), z.lazy(() => ImmunizationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vaccine: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  dose: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lotNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  administeredByStaffId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ImmunizationScalarWhereInputObjectSchema: z.ZodType<Prisma.ImmunizationScalarWhereInput> = immunizationscalarwhereinputSchema as unknown as z.ZodType<Prisma.ImmunizationScalarWhereInput>;
export const ImmunizationScalarWhereInputObjectZodSchema = immunizationscalarwhereinputSchema;
