import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  doctorId: z.string(),
  treatmentPlan: z.string().optional().nullable(),
  prescriptions: z.string().optional().nullable(),
  labRequest: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MedicalRecordsCreateManyInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyInput>;
export const MedicalRecordsCreateManyInputObjectZodSchema = makeSchema();
