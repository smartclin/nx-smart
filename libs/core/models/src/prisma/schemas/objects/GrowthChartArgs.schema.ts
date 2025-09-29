import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartSelectObjectSchema as GrowthChartSelectObjectSchema } from './GrowthChartSelect.schema';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './GrowthChartInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GrowthChartSelectObjectSchema).optional(),
  include: z.lazy(() => GrowthChartIncludeObjectSchema).optional()
}).strict();
export const GrowthChartArgsObjectSchema = makeSchema();
export const GrowthChartArgsObjectZodSchema = makeSchema();
