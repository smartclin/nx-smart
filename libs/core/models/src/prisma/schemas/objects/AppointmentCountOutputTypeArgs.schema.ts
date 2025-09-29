import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentCountOutputTypeSelectObjectSchema as AppointmentCountOutputTypeSelectObjectSchema } from './AppointmentCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppointmentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AppointmentCountOutputTypeArgsObjectSchema = makeSchema();
export const AppointmentCountOutputTypeArgsObjectZodSchema = makeSchema();
