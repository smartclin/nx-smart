import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workingdaysscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  day: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  startTime: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  closeTime: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkingDaysScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkingDaysScalarWhereWithAggregatesInput> = workingdaysscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkingDaysScalarWhereWithAggregatesInput>;
export const WorkingDaysScalarWhereWithAggregatesInputObjectZodSchema = workingdaysscalarwherewithaggregatesinputSchema;
