import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema';
import { NestedEnumFileTypeFilterObjectSchema as NestedEnumFileTypeFilterObjectSchema } from './NestedEnumFileTypeFilter.schema'

const makeSchema = () => z.object({
  equals: FileTypeSchema.optional(),
  in: FileTypeSchema.array().optional(),
  notIn: FileTypeSchema.array().optional(),
  not: z.union([FileTypeSchema, z.lazy(() => NestedEnumFileTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumFileTypeFilterObjectSchema: z.ZodType<Prisma.EnumFileTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFileTypeFilter>;
export const EnumFileTypeFilterObjectZodSchema = makeSchema();
