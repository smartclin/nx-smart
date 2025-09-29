import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  medicalRecordId: z.number().int(),
  doctorId: z.string().optional().nullable(),
  medicationName: z.string(),
  dosage: z.string(),
  frequency: z.string(),
  duration: z.string(),
  instructions: z.string().optional().nullable(),
  issuedDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const PrescriptionUncheckedCreateWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionUncheckedCreateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUncheckedCreateWithoutPatientInput>;
export const PrescriptionUncheckedCreateWithoutPatientInputObjectZodSchema = makeSchema();
