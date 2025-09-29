import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  bills: z.boolean().optional(),
  medical: z.boolean().optional(),
  reminders: z.boolean().optional(),
  Billing: z.boolean().optional()
}).strict();
export const AppointmentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AppointmentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentCountOutputTypeSelect>;
export const AppointmentCountOutputTypeSelectObjectZodSchema = makeSchema();
