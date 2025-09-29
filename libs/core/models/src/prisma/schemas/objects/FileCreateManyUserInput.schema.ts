import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  size: z.number().int(),
  type: FileTypeSchema,
  isPublic: z.boolean().optional(),
  adminId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FileCreateManyUserInputObjectSchema: z.ZodType<Prisma.FileCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyUserInput>;
export const FileCreateManyUserInputObjectZodSchema = makeSchema();
