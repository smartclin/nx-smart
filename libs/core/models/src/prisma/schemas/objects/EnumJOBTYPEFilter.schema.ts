import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema';
import { NestedEnumJOBTYPEFilterObjectSchema as NestedEnumJOBTYPEFilterObjectSchema } from './NestedEnumJOBTYPEFilter.schema'

const makeSchema = () => z.object({
  equals: JOBTYPESchema.optional(),
  in: JOBTYPESchema.array().optional(),
  notIn: JOBTYPESchema.array().optional(),
  not: z.union([JOBTYPESchema, z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema)]).optional()
}).strict();
export const EnumJOBTYPEFilterObjectSchema: z.ZodType<Prisma.EnumJOBTYPEFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJOBTYPEFilter>;
export const EnumJOBTYPEFilterObjectZodSchema = makeSchema();
