import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumFileTypeWithAggregatesFilterObjectSchema as EnumFileTypeWithAggregatesFilterObjectSchema } from './EnumFileTypeWithAggregatesFilter.schema';
import { FileTypeSchema } from '../enums/FileType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const filescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumFileTypeWithAggregatesFilterObjectSchema), FileTypeSchema]).optional(),
  isPublic: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  adminId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FileScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FileScalarWhereWithAggregatesInput> = filescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FileScalarWhereWithAggregatesInput>;
export const FileScalarWhereWithAggregatesInputObjectZodSchema = filescalarwherewithaggregatesinputSchema;
