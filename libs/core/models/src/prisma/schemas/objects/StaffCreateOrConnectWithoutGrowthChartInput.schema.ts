import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffCreateWithoutGrowthChartInputObjectSchema as StaffCreateWithoutGrowthChartInputObjectSchema } from './StaffCreateWithoutGrowthChartInput.schema';
import { StaffUncheckedCreateWithoutGrowthChartInputObjectSchema as StaffUncheckedCreateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedCreateWithoutGrowthChartInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StaffCreateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutGrowthChartInputObjectSchema)])
}).strict();
export const StaffCreateOrConnectWithoutGrowthChartInputObjectSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutGrowthChartInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateOrConnectWithoutGrowthChartInput>;
export const StaffCreateOrConnectWithoutGrowthChartInputObjectZodSchema = makeSchema();
