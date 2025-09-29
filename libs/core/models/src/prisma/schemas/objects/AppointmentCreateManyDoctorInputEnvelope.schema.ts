import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorAppointmentCreateManyDoctorInputObjectSchema as AppointmentCreateManyDoctorInputObjectSchema } from './AppointmentCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AppointmentCreateManyDoctorInputObjectSchema), z.lazy(() => AppointmentCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AppointmentCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.AppointmentCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateManyDoctorInputEnvelope>;
export const AppointmentCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
