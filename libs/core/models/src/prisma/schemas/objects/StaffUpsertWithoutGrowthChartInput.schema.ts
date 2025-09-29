import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffUpdateWithoutGrowthChartInputObjectSchema as StaffUpdateWithoutGrowthChartInputObjectSchema } from './StaffUpdateWithoutGrowthChartInput.schema';
import { StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema as StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedUpdateWithoutGrowthChartInput.schema';
import { StaffCreateWithoutGrowthChartInputObjectSchema as StaffCreateWithoutGrowthChartInputObjectSchema } from './StaffCreateWithoutGrowthChartInput.schema';
import { StaffUncheckedCreateWithoutGrowthChartInputObjectSchema as StaffUncheckedCreateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedCreateWithoutGrowthChartInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StaffUpdateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema)]),
  create: z.union([z.lazy(() => StaffCreateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutGrowthChartInputObjectSchema)]),
  where: z.lazy(() => StaffWhereInputObjectSchema).optional()
}).strict();
export const StaffUpsertWithoutGrowthChartInputObjectSchema: z.ZodType<Prisma.StaffUpsertWithoutGrowthChartInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpsertWithoutGrowthChartInput>;
export const StaffUpsertWithoutGrowthChartInputObjectZodSchema = makeSchema();
