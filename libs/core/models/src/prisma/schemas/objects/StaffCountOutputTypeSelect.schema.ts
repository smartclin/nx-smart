import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  immunizations: z.boolean().optional(),
  GrowthChart: z.boolean().optional()
}).strict();
export const StaffCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StaffCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StaffCountOutputTypeSelect>;
export const StaffCountOutputTypeSelectObjectZodSchema = makeSchema();
