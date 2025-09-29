import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesArgsObjectSchema as ServicesArgsObjectSchema } from './ServicesArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  services: z.union([z.boolean(), z.lazy(() => ServicesArgsObjectSchema)]).optional(),
  medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional()
}).strict();
export const LabTestIncludeObjectSchema: z.ZodType<Prisma.LabTestInclude> = makeSchema() as unknown as z.ZodType<Prisma.LabTestInclude>;
export const LabTestIncludeObjectZodSchema = makeSchema();
