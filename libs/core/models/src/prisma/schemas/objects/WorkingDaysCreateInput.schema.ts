import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateNestedOneWithoutWorkingDaysInputObjectSchema as DoctorCreateNestedOneWithoutWorkingDaysInputObjectSchema } from './DoctorCreateNestedOneWithoutWorkingDaysInput.schema'

const makeSchema = () => z.object({
  day: z.string(),
  startTime: z.string(),
  closeTime: z.string(),
  createdAt: z.coerce.date().optional(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutWorkingDaysInputObjectSchema)
}).strict();
export const WorkingDaysCreateInputObjectSchema: z.ZodType<Prisma.WorkingDaysCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysCreateInput>;
export const WorkingDaysCreateInputObjectZodSchema = makeSchema();
