import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './AppointmentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  appointmentId: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReminderOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReminderOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderOrderByWithRelationInput>;
export const ReminderOrderByWithRelationInputObjectZodSchema = makeSchema();
