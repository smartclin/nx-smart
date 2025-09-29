import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  appointmentId: z.literal(true).optional()
}).strict();
export const MedicalRecordsSumAggregateInputObjectSchema: z.ZodType<Prisma.MedicalRecordsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsSumAggregateInputType>;
export const MedicalRecordsSumAggregateInputObjectZodSchema = makeSchema();
