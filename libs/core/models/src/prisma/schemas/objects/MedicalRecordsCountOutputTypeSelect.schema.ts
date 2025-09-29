import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  labTests: z.boolean().optional(),
  encounters: z.boolean().optional(),
  diagnoses: z.boolean().optional(),
  prescriptionsList: z.boolean().optional(),
  vitalSigns: z.boolean().optional()
}).strict();
export const MedicalRecordsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MedicalRecordsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCountOutputTypeSelect>;
export const MedicalRecordsCountOutputTypeSelectObjectZodSchema = makeSchema();
