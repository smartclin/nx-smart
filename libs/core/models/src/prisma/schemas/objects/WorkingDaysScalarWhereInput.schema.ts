import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workingdaysscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkingDaysScalarWhereInputObjectSchema), z.lazy(() => WorkingDaysScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkingDaysScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkingDaysScalarWhereInputObjectSchema), z.lazy(() => WorkingDaysScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  day: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startTime: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  closeTime: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkingDaysScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkingDaysScalarWhereInput> = workingdaysscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkingDaysScalarWhereInput>;
export const WorkingDaysScalarWhereInputObjectZodSchema = workingdaysscalarwhereinputSchema;
