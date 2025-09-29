import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { StaffArgsObjectSchema as StaffArgsObjectSchema } from './StaffArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  patientId: z.boolean().optional(),
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  vaccine: z.boolean().optional(),
  date: z.boolean().optional(),
  dose: z.boolean().optional(),
  lotNumber: z.boolean().optional(),
  administeredByStaffId: z.boolean().optional(),
  administeredBy: z.union([z.boolean(), z.lazy(() => StaffArgsObjectSchema)]).optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const ImmunizationSelectObjectSchema: z.ZodType<Prisma.ImmunizationSelect> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationSelect>;
export const ImmunizationSelectObjectZodSchema = makeSchema();
