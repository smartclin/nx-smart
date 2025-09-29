import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceAppointmentCreateManyServiceInputObjectSchema as AppointmentCreateManyServiceInputObjectSchema } from './AppointmentCreateManyServiceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AppointmentCreateManyServiceInputObjectSchema), z.lazy(() => AppointmentCreateManyServiceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AppointmentCreateManyServiceInputEnvelopeObjectSchema: z.ZodType<Prisma.AppointmentCreateManyServiceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCreateManyServiceInputEnvelope>;
export const AppointmentCreateManyServiceInputEnvelopeObjectZodSchema = makeSchema();
