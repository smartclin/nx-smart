import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AdminWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AdminWhereInputObjectSchema).optional().nullable()
}).strict();
export const AdminNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AdminNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AdminNullableScalarRelationFilter>;
export const AdminNullableScalarRelationFilterObjectZodSchema = makeSchema();
