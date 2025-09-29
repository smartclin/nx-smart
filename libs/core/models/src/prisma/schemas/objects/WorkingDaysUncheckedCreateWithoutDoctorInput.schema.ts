import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUncheckedCreateWithoutDoctorInput>;
export const WorkingDaysUncheckedCreateWithoutDoctorInputObjectZodSchema = makeSchema();
