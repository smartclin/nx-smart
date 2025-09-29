import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  patientId: z.literal(true).optional(),
  vaccine: z.literal(true).optional(),
  date: z.literal(true).optional(),
  dose: z.literal(true).optional(),
  lotNumber: z.literal(true).optional(),
  administeredByStaffId: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ImmunizationMaxAggregateInputObjectSchema: z.ZodType<Prisma.ImmunizationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationMaxAggregateInputType>;
export const ImmunizationMaxAggregateInputObjectZodSchema = makeSchema();
