import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const medicalrecordsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema), z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  appointmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  treatmentPlan: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  prescriptions: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  labRequest: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MedicalRecordsScalarWhereInputObjectSchema: z.ZodType<Prisma.MedicalRecordsScalarWhereInput> = medicalrecordsscalarwhereinputSchema as unknown as z.ZodType<Prisma.MedicalRecordsScalarWhereInput>;
export const MedicalRecordsScalarWhereInputObjectZodSchema = medicalrecordsscalarwhereinputSchema;
