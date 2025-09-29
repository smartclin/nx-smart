import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  patientId: z.string(),
  appointmentId: z.number().int(),
  treatmentPlan: z.string().optional().nullable(),
  prescriptions: z.string().optional().nullable(),
  labRequest: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const MedicalRecordsCreateManyDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateManyDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyDoctorInput>;
export const MedicalRecordsCreateManyDoctorInputObjectZodSchema = makeSchema();
