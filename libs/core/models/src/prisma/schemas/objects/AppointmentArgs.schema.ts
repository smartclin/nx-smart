import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './AppointmentSelect.schema';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './AppointmentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppointmentSelectObjectSchema).optional(),
  include: z.lazy(() => AppointmentIncludeObjectSchema).optional()
}).strict();
export const AppointmentArgsObjectSchema = makeSchema();
export const AppointmentArgsObjectZodSchema = makeSchema();
