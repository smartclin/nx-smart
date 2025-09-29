import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorMedicalRecordsCreateManyDoctorInputObjectSchema as MedicalRecordsCreateManyDoctorInputObjectSchema } from './MedicalRecordsCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MedicalRecordsCreateManyDoctorInputObjectSchema), z.lazy(() => MedicalRecordsCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MedicalRecordsCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateManyDoctorInputEnvelope>;
export const MedicalRecordsCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
