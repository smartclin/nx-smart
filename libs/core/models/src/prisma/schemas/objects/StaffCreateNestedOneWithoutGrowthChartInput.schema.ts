import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutGrowthChartInputObjectSchema as StaffCreateWithoutGrowthChartInputObjectSchema } from './StaffCreateWithoutGrowthChartInput.schema';
import { StaffUncheckedCreateWithoutGrowthChartInputObjectSchema as StaffUncheckedCreateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedCreateWithoutGrowthChartInput.schema';
import { StaffCreateOrConnectWithoutGrowthChartInputObjectSchema as StaffCreateOrConnectWithoutGrowthChartInputObjectSchema } from './StaffCreateOrConnectWithoutGrowthChartInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutGrowthChartInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutGrowthChartInputObjectSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputObjectSchema).optional()
}).strict();
export const StaffCreateNestedOneWithoutGrowthChartInputObjectSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutGrowthChartInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateNestedOneWithoutGrowthChartInput>;
export const StaffCreateNestedOneWithoutGrowthChartInputObjectZodSchema = makeSchema();
