import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema'

const nestedenumjobtypefilterSchema = z.object({
  equals: JOBTYPESchema.optional(),
  in: JOBTYPESchema.array().optional(),
  notIn: JOBTYPESchema.array().optional(),
  not: z.union([JOBTYPESchema, z.lazy(() => NestedEnumJOBTYPEFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumJOBTYPEFilterObjectSchema: z.ZodType<Prisma.NestedEnumJOBTYPEFilter> = nestedenumjobtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumJOBTYPEFilter>;
export const NestedEnumJOBTYPEFilterObjectZodSchema = nestedenumjobtypefilterSchema;
