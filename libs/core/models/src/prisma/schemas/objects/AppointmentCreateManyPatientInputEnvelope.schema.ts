import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientAppointmentCreateManyPatientInputObjectSchema as AppointmentCreateManyPatientInputObjectSchema } from './AppointmentCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AppointmentCreateManyPatientInputObjectSchema), z.lazy(() => AppointmentCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AppointmentCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.AppointmentCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateManyPatientInputEnvelope>;
export const AppointmentCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
