import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const encounterscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EncounterScalarWhereInputObjectSchema), z.lazy(() => EncounterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EncounterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EncounterScalarWhereInputObjectSchema), z.lazy(() => EncounterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  diagnosis: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  treatment: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  medicalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const EncounterScalarWhereInputObjectSchema: z.ZodType<Prisma.EncounterScalarWhereInput> = encounterscalarwhereinputSchema as unknown as z.ZodType<Prisma.EncounterScalarWhereInput>;
export const EncounterScalarWhereInputObjectZodSchema = encounterscalarwhereinputSchema;
