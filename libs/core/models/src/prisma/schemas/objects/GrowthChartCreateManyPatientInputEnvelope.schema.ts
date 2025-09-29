import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientGrowthChartCreateManyPatientInputObjectSchema as GrowthChartCreateManyPatientInputObjectSchema } from './GrowthChartCreateManyPatientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GrowthChartCreateManyPatientInputObjectSchema), z.lazy(() => GrowthChartCreateManyPatientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GrowthChartCreateManyPatientInputEnvelopeObjectSchema: z.ZodType<Prisma.GrowthChartCreateManyPatientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateManyPatientInputEnvelope>;
export const GrowthChartCreateManyPatientInputEnvelopeObjectZodSchema = makeSchema();
