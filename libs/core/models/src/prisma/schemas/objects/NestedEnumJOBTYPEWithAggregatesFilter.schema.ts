import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJOBTYPEFilterObjectSchema as NestedEnumJOBTYPEFilterObjectSchema } from './NestedEnumJOBTYPEFilter.schema'

const nestedenumjobtypewithaggregatesfilterSchema = z.object({
  equals: JOBTYPESchema.optional(),
  in: JOBTYPESchema.array().optional(),
  notIn: JOBTYPESchema.array().optional(),
  not: z.union([JOBTYPESchema, z.lazy(() => NestedEnumJOBTYPEWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema).optional()
}).strict();
export const NestedEnumJOBTYPEWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJOBTYPEWithAggregatesFilter> = nestedenumjobtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumJOBTYPEWithAggregatesFilter>;
export const NestedEnumJOBTYPEWithAggregatesFilterObjectZodSchema = nestedenumjobtypewithaggregatesfilterSchema;
