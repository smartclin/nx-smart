import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  vaccine: z.string(),
  date: z.coerce.date(),
  dose: z.string().optional().nullable(),
  lotNumber: z.string().optional().nullable(),
  administeredByStaffId: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ImmunizationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ImmunizationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUncheckedCreateInput>;
export const ImmunizationUncheckedCreateInputObjectZodSchema = makeSchema();
