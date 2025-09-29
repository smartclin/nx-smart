import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReminderMethodSchema } from '../enums/ReminderMethod.schema';
import { EnumReminderMethodFieldUpdateOperationsInputObjectSchema as EnumReminderMethodFieldUpdateOperationsInputObjectSchema } from './EnumReminderMethodFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ReminderStatusSchema } from '../enums/ReminderStatus.schema';
import { EnumReminderStatusFieldUpdateOperationsInputObjectSchema as EnumReminderStatusFieldUpdateOperationsInputObjectSchema } from './EnumReminderStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  method: z.union([ReminderMethodSchema, z.lazy(() => EnumReminderMethodFieldUpdateOperationsInputObjectSchema)]).optional(),
  sentAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ReminderStatusSchema, z.lazy(() => EnumReminderStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReminderUncheckedUpdateWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderUncheckedUpdateWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUncheckedUpdateWithoutAppointmentInput>;
export const ReminderUncheckedUpdateWithoutAppointmentInputObjectZodSchema = makeSchema();
