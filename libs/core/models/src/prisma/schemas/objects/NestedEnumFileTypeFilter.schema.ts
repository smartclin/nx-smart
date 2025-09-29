import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema'

const nestedenumfiletypefilterSchema = z.object({
  equals: FileTypeSchema.optional(),
  in: FileTypeSchema.array().optional(),
  notIn: FileTypeSchema.array().optional(),
  not: z.union([FileTypeSchema, z.lazy(() => NestedEnumFileTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumFileTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumFileTypeFilter> = nestedenumfiletypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumFileTypeFilter>;
export const NestedEnumFileTypeFilterObjectZodSchema = nestedenumfiletypefilterSchema;
