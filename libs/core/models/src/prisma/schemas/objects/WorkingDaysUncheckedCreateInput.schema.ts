import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  doctorId: z.string(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WorkingDaysUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUncheckedCreateInput>;
export const WorkingDaysUncheckedCreateInputObjectZodSchema = makeSchema();
