import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { EnumServiceCategoryNullableWithAggregatesFilterObjectSchema as EnumServiceCategoryNullableWithAggregatesFilterObjectSchema } from './EnumServiceCategoryNullableWithAggregatesFilter.schema';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const servicesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ServicesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServicesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServicesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServicesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServicesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  serviceName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  category: z.union([z.lazy(() => EnumServiceCategoryNullableWithAggregatesFilterObjectSchema), ServiceCategorySchema]).optional().nullable(),
  duration: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  isAvailable: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ServicesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServicesScalarWhereWithAggregatesInput> = servicesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServicesScalarWhereWithAggregatesInput>;
export const ServicesScalarWhereWithAggregatesInputObjectZodSchema = servicesscalarwherewithaggregatesinputSchema;
