import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartScalarWhereInputObjectSchema as GrowthChartScalarWhereInputObjectSchema } from './GrowthChartScalarWhereInput.schema';
import { GrowthChartUpdateManyMutationInputObjectSchema as GrowthChartUpdateManyMutationInputObjectSchema } from './GrowthChartUpdateManyMutationInput.schema';
import { GrowthChartUncheckedUpdateManyWithoutPatientInputObjectSchema as GrowthChartUncheckedUpdateManyWithoutPatientInputObjectSchema } from './GrowthChartUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GrowthChartScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GrowthChartUpdateManyMutationInputObjectSchema), z.lazy(() => GrowthChartUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const GrowthChartUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartUpdateManyWithWhereWithoutPatientInput>;
export const GrowthChartUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
