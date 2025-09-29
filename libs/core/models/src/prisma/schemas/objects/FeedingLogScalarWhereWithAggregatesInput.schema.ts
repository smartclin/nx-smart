import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumFeedingTypeWithAggregatesFilterObjectSchema as EnumFeedingTypeWithAggregatesFilterObjectSchema } from './EnumFeedingTypeWithAggregatesFilter.schema';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const feedinglogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FeedingLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FeedingLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FeedingLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeedingLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FeedingLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  patientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  type: z.union([z.lazy(() => EnumFeedingTypeWithAggregatesFilterObjectSchema), FeedingTypeSchema]).optional(),
  duration: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  amount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  breast: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const FeedingLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FeedingLogScalarWhereWithAggregatesInput> = feedinglogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FeedingLogScalarWhereWithAggregatesInput>;
export const FeedingLogScalarWhereWithAggregatesInputObjectZodSchema = feedinglogscalarwherewithaggregatesinputSchema;
