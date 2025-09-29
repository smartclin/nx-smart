import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MeasuredByGrowthChartCreateManyMeasuredByInputObjectSchema as GrowthChartCreateManyMeasuredByInputObjectSchema } from './GrowthChartCreateManyMeasuredByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GrowthChartCreateManyMeasuredByInputObjectSchema), z.lazy(() => GrowthChartCreateManyMeasuredByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GrowthChartCreateManyMeasuredByInputEnvelopeObjectSchema: z.ZodType<Prisma.GrowthChartCreateManyMeasuredByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateManyMeasuredByInputEnvelope>;
export const GrowthChartCreateManyMeasuredByInputEnvelopeObjectZodSchema = makeSchema();
