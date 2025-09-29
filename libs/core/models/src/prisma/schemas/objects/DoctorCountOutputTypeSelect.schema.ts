import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  workingDays: z.boolean().optional(),
  appointments: z.boolean().optional(),
  diagnosis: z.boolean().optional(),
  Prescription: z.boolean().optional(),
  Encounter: z.boolean().optional(),
  MedicalRecords: z.boolean().optional()
}).strict();
export const DoctorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DoctorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCountOutputTypeSelect>;
export const DoctorCountOutputTypeSelectObjectZodSchema = makeSchema();
