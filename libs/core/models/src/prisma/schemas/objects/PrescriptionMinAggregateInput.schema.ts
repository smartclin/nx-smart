import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  medicalRecordId: z.literal(true).optional(),
  doctorId: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  medicationName: z.literal(true).optional(),
  dosage: z.literal(true).optional(),
  frequency: z.literal(true).optional(),
  duration: z.literal(true).optional(),
  instructions: z.literal(true).optional(),
  issuedDate: z.literal(true).optional(),
  endDate: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const PrescriptionMinAggregateInputObjectSchema: z.ZodType<Prisma.PrescriptionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionMinAggregateInputType>;
export const PrescriptionMinAggregateInputObjectZodSchema = makeSchema();
