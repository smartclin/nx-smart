import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentMedicalRecordsCreateManyAppointmentInputObjectSchema as MedicalRecordsCreateManyAppointmentInputObjectSchema } from './MedicalRecordsCreateManyAppointmentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MedicalRecordsCreateManyAppointmentInputObjectSchema), z.lazy(() => MedicalRecordsCreateManyAppointmentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MedicalRecordsCreateManyAppointmentInputEnvelopeObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateManyAppointmentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyAppointmentInputEnvelope>;
export const MedicalRecordsCreateManyAppointmentInputEnvelopeObjectZodSchema = makeSchema();
