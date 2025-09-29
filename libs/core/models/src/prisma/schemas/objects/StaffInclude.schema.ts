import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ImmunizationFindManySchema as ImmunizationFindManySchema } from '../findManyImmunization.schema';
import { GrowthChartFindManySchema as GrowthChartFindManySchema } from '../findManyGrowthChart.schema';
import { StaffCountOutputTypeArgsObjectSchema as StaffCountOutputTypeArgsObjectSchema } from './StaffCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  immunizations: z.union([z.boolean(), z.lazy(() => ImmunizationFindManySchema)]).optional(),
  GrowthChart: z.union([z.boolean(), z.lazy(() => GrowthChartFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StaffCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StaffIncludeObjectSchema: z.ZodType<Prisma.StaffInclude> = makeSchema() as unknown as z.ZodType<Prisma.StaffInclude>;
export const StaffIncludeObjectZodSchema = makeSchema();
