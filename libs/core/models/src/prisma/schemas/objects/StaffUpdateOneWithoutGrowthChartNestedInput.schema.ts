import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutGrowthChartInputObjectSchema as StaffCreateWithoutGrowthChartInputObjectSchema } from './StaffCreateWithoutGrowthChartInput.schema';
import { StaffUncheckedCreateWithoutGrowthChartInputObjectSchema as StaffUncheckedCreateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedCreateWithoutGrowthChartInput.schema';
import { StaffCreateOrConnectWithoutGrowthChartInputObjectSchema as StaffCreateOrConnectWithoutGrowthChartInputObjectSchema } from './StaffCreateOrConnectWithoutGrowthChartInput.schema';
import { StaffUpsertWithoutGrowthChartInputObjectSchema as StaffUpsertWithoutGrowthChartInputObjectSchema } from './StaffUpsertWithoutGrowthChartInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateToOneWithWhereWithoutGrowthChartInputObjectSchema as StaffUpdateToOneWithWhereWithoutGrowthChartInputObjectSchema } from './StaffUpdateToOneWithWhereWithoutGrowthChartInput.schema';
import { StaffUpdateWithoutGrowthChartInputObjectSchema as StaffUpdateWithoutGrowthChartInputObjectSchema } from './StaffUpdateWithoutGrowthChartInput.schema';
import { StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema as StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema } from './StaffUncheckedUpdateWithoutGrowthChartInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutGrowthChartInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutGrowthChartInputObjectSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutGrowthChartInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StaffWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StaffWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StaffUpdateToOneWithWhereWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUpdateWithoutGrowthChartInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutGrowthChartInputObjectSchema)]).optional()
}).strict();
export const StaffUpdateOneWithoutGrowthChartNestedInputObjectSchema: z.ZodType<Prisma.StaffUpdateOneWithoutGrowthChartNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateOneWithoutGrowthChartNestedInput>;
export const StaffUpdateOneWithoutGrowthChartNestedInputObjectZodSchema = makeSchema();
