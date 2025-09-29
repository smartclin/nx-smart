import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './WorkingDaysWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkingDaysWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkingDaysWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkingDaysWhereInputObjectSchema).optional()
}).strict();
export const WorkingDaysListRelationFilterObjectSchema: z.ZodType<Prisma.WorkingDaysListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysListRelationFilter>;
export const WorkingDaysListRelationFilterObjectZodSchema = makeSchema();
