import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumFeedingTypeFilterObjectSchema as EnumFeedingTypeFilterObjectSchema } from './EnumFeedingTypeFilter.schema';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const feedinglogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FeedingLogScalarWhereInputObjectSchema), z.lazy(() => FeedingLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FeedingLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeedingLogScalarWhereInputObjectSchema), z.lazy(() => FeedingLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  type: z.union([z.lazy(() => EnumFeedingTypeFilterObjectSchema), FeedingTypeSchema]).optional(),
  duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  breast: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const FeedingLogScalarWhereInputObjectSchema: z.ZodType<Prisma.FeedingLogScalarWhereInput> = feedinglogscalarwhereinputSchema as unknown as z.ZodType<Prisma.FeedingLogScalarWhereInput>;
export const FeedingLogScalarWhereInputObjectZodSchema = feedinglogscalarwhereinputSchema;
