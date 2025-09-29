import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesArgsObjectSchema as ServicesArgsObjectSchema } from './ServicesArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  recordId: z.boolean().optional(),
  testDate: z.boolean().optional(),
  result: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  serviceId: z.boolean().optional(),
  services: z.union([z.boolean(), z.lazy(() => ServicesArgsObjectSchema)]).optional(),
  medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const LabTestSelectObjectSchema: z.ZodType<Prisma.LabTestSelect> = makeSchema() as unknown as z.ZodType<Prisma.LabTestSelect>;
export const LabTestSelectObjectZodSchema = makeSchema();
