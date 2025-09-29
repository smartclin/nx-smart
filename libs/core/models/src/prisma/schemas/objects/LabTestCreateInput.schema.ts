import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateNestedOneWithoutLabtestsInputObjectSchema as ServicesCreateNestedOneWithoutLabtestsInputObjectSchema } from './ServicesCreateNestedOneWithoutLabtestsInput.schema';
import { MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema as MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema } from './MedicalRecordsCreateNestedOneWithoutLabTestsInput.schema'

const makeSchema = () => z.object({
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestsInputObjectSchema).optional(),
  medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLabTestsInputObjectSchema)
}).strict();
export const LabTestCreateInputObjectSchema: z.ZodType<Prisma.LabTestCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateInput>;
export const LabTestCreateInputObjectZodSchema = makeSchema();
