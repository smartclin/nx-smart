import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema as MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutLabTestsInput.schema'

const makeSchema = () => z.object({
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema)
}).strict();
export const LabTestCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestCreateWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateWithoutServicesInput>;
export const LabTestCreateWithoutServicesInputObjectZodSchema = makeSchema();
