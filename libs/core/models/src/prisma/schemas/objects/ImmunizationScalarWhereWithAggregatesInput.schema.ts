import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const immunizationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ImmunizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImmunizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImmunizationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImmunizationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ImmunizationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  vaccine: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  dose: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  lotNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  administeredByStaffId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ImmunizationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ImmunizationScalarWhereWithAggregatesInput> = immunizationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ImmunizationScalarWhereWithAggregatesInput>;
export const ImmunizationScalarWhereWithAggregatesInputObjectZodSchema = immunizationscalarwherewithaggregatesinputSchema;
