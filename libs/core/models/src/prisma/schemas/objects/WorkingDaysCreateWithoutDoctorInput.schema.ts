import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkingDaysCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysCreateWithoutDoctorInput>;
export const WorkingDaysCreateWithoutDoctorInputObjectZodSchema = makeSchema();
