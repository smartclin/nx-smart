import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './ReminderWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReminderWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReminderWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReminderWhereInputObjectSchema).optional()
}).strict();
export const ReminderListRelationFilterObjectSchema: z.ZodType<Prisma.ReminderListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReminderListRelationFilter>;
export const ReminderListRelationFilterObjectZodSchema = makeSchema();
