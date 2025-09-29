import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema';
import { StaffUpdateWithoutGrowthChartInputObjectSchema as StaffUpdateWithoutGrowthChartInputObjectSchema } from './StaffUpdateWithoutGrowthChartInput.schema';
import { StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema as StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedUpdateWithoutGrowthChartInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StaffUpdateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema)])
}).strict();
export const StaffUpdateToOneWithWhereWithoutGrowthChartInputObjectSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutGrowthChartInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutGrowthChartInput>;
export const StaffUpdateToOneWithWhereWithoutGrowthChartInputObjectZodSchema = makeSchema();
