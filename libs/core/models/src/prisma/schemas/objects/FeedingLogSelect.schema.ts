import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  duration: z.boolean().optional(),
  amount: z.boolean().optional(),
  breast: z.boolean().optional(),
  notes: z.boolean().optional()
}).strict();
export const FeedingLogSelectObjectSchema: z.ZodType<Prisma.FeedingLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogSelect>;
export const FeedingLogSelectObjectZodSchema = makeSchema();
