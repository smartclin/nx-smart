import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateNestedOneWithoutLabtestsInputObjectSchema as ServicesCreateNestedOneWithoutLabtestsInputObjectSchema } from './ServicesCreateNestedOneWithoutLabtestsInput.schema'

const makeSchema = () => z.object({
  testDate: z.coerce.date(),
  result: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestsInputObjectSchema).optional()
}).strict();
export const LabTestCreateWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestCreateWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateWithoutMedicalRecordInput>;
export const LabTestCreateWithoutMedicalRecordInputObjectZodSchema = makeSchema();
