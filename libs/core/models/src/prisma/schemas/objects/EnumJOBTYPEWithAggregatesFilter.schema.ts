import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { NestedEnumJOBTYPEWithAggregatesFilterObjectSchema as NestedEnumJOBTYPEWithAggregatesFilterObjectSchema } from './NestedEnumJOBTYPEWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJOBTYPEFilterObjectSchema as NestedEnumJOBTYPEFilterObjectSchema } from './NestedEnumJOBTYPEFilter.schema'

const makeSchema = () => z.object({
  equals: JOBTYPESchema.optional(),
  in: JOBTYPESchema.array().optional(),
  notIn: JOBTYPESchema.array().optional(),
  not: z.union([JOBTYPESchema, z.lazy(() => NestedEnumJOBTYPEWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema).optional()
}).strict();
export const EnumJOBTYPEWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumJOBTYPEWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJOBTYPEWithAggregatesFilter>;
export const EnumJOBTYPEWithAggregatesFilterObjectZodSchema = makeSchema();
