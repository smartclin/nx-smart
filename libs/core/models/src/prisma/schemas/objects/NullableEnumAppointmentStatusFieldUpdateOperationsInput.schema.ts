import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentStatusSchema } from '../enums/AppointmentStatus.schema'

const makeSchema = () => z.object({
  set: AppointmentStatusSchema.optional()
}).strict();
export const NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumAppointmentStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumAppointmentStatusFieldUpdateOperationsInput>;
export const NullableEnumAppointmentStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
