import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EncounterNullableScalarRelationFilterObjectSchema as EncounterNullableScalarRelationFilterObjectSchema } from './EncounterNullableScalarRelationFilter.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema';
import { MedicalRecordsScalarRelationFilterObjectSchema as MedicalRecordsScalarRelationFilterObjectSchema } from './MedicalRecordsScalarRelationFilter.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const vitalsignswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VitalSignsWhereInputObjectSchema), z.lazy(() => VitalSignsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VitalSignsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VitalSignsWhereInputObjectSchema), z.lazy(() => VitalSignsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  encounterId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  medicalId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  height: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  weight: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  temperature: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  systolic: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  diastolic: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  heartRate: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  respiratoryRate: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  oxygenSaturation: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  recordedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  encounter: z.union([z.lazy(() => EncounterNullableScalarRelationFilterObjectSchema), z.lazy(() => EncounterWhereInputObjectSchema)]).optional(),
  medical: z.union([z.lazy(() => MedicalRecordsScalarRelationFilterObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema)]).optional()
}).strict();
export const VitalSignsWhereInputObjectSchema: z.ZodType<Prisma.VitalSignsWhereInput> = vitalsignswhereinputSchema as unknown as z.ZodType<Prisma.VitalSignsWhereInput>;
export const VitalSignsWhereInputObjectZodSchema = vitalsignswhereinputSchema;
