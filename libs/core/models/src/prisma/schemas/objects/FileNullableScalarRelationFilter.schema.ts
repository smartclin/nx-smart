import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FileWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => FileWhereInputObjectSchema).optional().nullable()
}).strict();
export const FileNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FileNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FileNullableScalarRelationFilter>;
export const FileNullableScalarRelationFilterObjectZodSchema = makeSchema();
