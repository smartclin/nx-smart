import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './GrowthChartWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GrowthChartWhereInputObjectSchema).optional(),
  some: z.lazy(() => GrowthChartWhereInputObjectSchema).optional(),
  none: z.lazy(() => GrowthChartWhereInputObjectSchema).optional()
}).strict();
export const GrowthChartListRelationFilterObjectSchema: z.ZodType<Prisma.GrowthChartListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartListRelationFilter>;
export const GrowthChartListRelationFilterObjectZodSchema = makeSchema();
