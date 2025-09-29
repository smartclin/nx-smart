import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorArgsObjectSchema as DoctorArgsObjectSchema } from './DoctorArgs.schema'

const makeSchema = () => z.object({
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional()
}).strict();
export const WorkingDaysIncludeObjectSchema: z.ZodType<Prisma.WorkingDaysInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysInclude>;
export const WorkingDaysIncludeObjectZodSchema = makeSchema();
