import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  day: z.boolean().optional(),
  startTime: z.boolean().optional(),
  closeTime: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const WorkingDaysSelectObjectSchema: z.ZodType<Prisma.WorkingDaysSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysSelect>;
export const WorkingDaysSelectObjectZodSchema = makeSchema();
