import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ServicesNullableScalarRelationFilterObjectSchema as ServicesNullableScalarRelationFilterObjectSchema } from './ServicesNullableScalarRelationFilter.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { MedicalRecordsScalarRelationFilterObjectSchema as MedicalRecordsScalarRelationFilterObjectSchema } from './MedicalRecordsScalarRelationFilter.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const labtestwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LabTestWhereInputObjectSchema), z.lazy(() => LabTestWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LabTestWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LabTestWhereInputObjectSchema), z.lazy(() => LabTestWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  recordId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  testDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  serviceId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  services: z.union([z.lazy(() => ServicesNullableScalarRelationFilterObjectSchema), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  medicalRecord: z.union([z.lazy(() => MedicalRecordsScalarRelationFilterObjectSchema), z.lazy(() => MedicalRecordsWhereInputObjectSchema)]).optional()
}).strict();
export const LabTestWhereInputObjectSchema: z.ZodType<Prisma.LabTestWhereInput> = labtestwhereinputSchema as unknown as z.ZodType<Prisma.LabTestWhereInput>;
export const LabTestWhereInputObjectZodSchema = labtestwhereinputSchema;
