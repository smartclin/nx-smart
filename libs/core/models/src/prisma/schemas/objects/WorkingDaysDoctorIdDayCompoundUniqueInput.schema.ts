import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  doctorId: z.string(),
  day: z.string()
}).strict();
export const WorkingDaysDoctorIdDayCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkingDaysDoctorIdDayCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysDoctorIdDayCompoundUniqueInput>;
export const WorkingDaysDoctorIdDayCompoundUniqueInputObjectZodSchema = makeSchema();
