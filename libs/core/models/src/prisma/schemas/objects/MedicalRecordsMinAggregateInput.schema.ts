import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  appointmentId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  treatmentPlan: z.literal(true).optional(),
  prescriptions: z.literal(true).optional(),
  labRequest: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MedicalRecordsMinAggregateInputObjectSchema: z.ZodType<Prisma.MedicalRecordsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsMinAggregateInputType>;
export const MedicalRecordsMinAggregateInputObjectZodSchema = makeSchema();
