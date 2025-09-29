import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema';
import { StaffArgsObjectSchema as StaffArgsObjectSchema } from './StaffArgs.schema'

const makeSchema = () => z.object({
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional(),
  measuredBy: z.union([z.boolean(), z.lazy(() => StaffArgsObjectSchema)]).optional()
}).strict();
export const GrowthChartIncludeObjectSchema: z.ZodType<Prisma.GrowthChartInclude> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartInclude>;
export const GrowthChartIncludeObjectZodSchema = makeSchema();
