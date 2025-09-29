import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFileTypeFilterObjectSchema as NestedEnumFileTypeFilterObjectSchema } from './NestedEnumFileTypeFilter.schema'

const nestedenumfiletypewithaggregatesfilterSchema = z.object({
  equals: FileTypeSchema.optional(),
  in: FileTypeSchema.array().optional(),
  notIn: FileTypeSchema.array().optional(),
  not: z.union([FileTypeSchema, z.lazy(() => NestedEnumFileTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFileTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFileTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumFileTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumFileTypeWithAggregatesFilter> = nestedenumfiletypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFileTypeWithAggregatesFilter>;
export const NestedEnumFileTypeWithAggregatesFilterObjectZodSchema = nestedenumfiletypewithaggregatesfilterSchema;
