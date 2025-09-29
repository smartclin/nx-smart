import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ImmunizationFindManySchema as ImmunizationFindManySchema } from '../findManyImmunization.schema';
import { GrowthChartFindManySchema as GrowthChartFindManySchema } from '../findManyGrowthChart.schema';
import { StaffCountOutputTypeArgsObjectSchema as StaffCountOutputTypeArgsObjectSchema } from './StaffCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  address: z.boolean().optional(),
  department: z.boolean().optional(),
  img: z.boolean().optional(),
  licenseNumber: z.boolean().optional(),
  colorCode: z.boolean().optional(),
  hireDate: z.boolean().optional(),
  salary: z.boolean().optional(),
  role: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  immunizations: z.union([z.boolean(), z.lazy(() => ImmunizationFindManySchema)]).optional(),
  GrowthChart: z.union([z.boolean(), z.lazy(() => GrowthChartFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StaffCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StaffSelectObjectSchema: z.ZodType<Prisma.StaffSelect> = makeSchema() as unknown as z.ZodType<Prisma.StaffSelect>;
export const StaffSelectObjectZodSchema = makeSchema();
