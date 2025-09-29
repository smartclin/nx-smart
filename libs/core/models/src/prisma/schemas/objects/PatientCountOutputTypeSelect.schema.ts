import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  appointments: z.boolean().optional(),
  medical: z.boolean().optional(),
  payments: z.boolean().optional(),
  encounters: z.boolean().optional(),
  immunizations: z.boolean().optional(),
  growthCharts: z.boolean().optional(),
  feedingLogs: z.boolean().optional(),
  billing: z.boolean().optional(),
  prescriptions: z.boolean().optional()
}).strict();
export const PatientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PatientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PatientCountOutputTypeSelect>;
export const PatientCountOutputTypeSelectObjectZodSchema = makeSchema();
