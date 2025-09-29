import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StaffWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => StaffWhereInputObjectSchema).optional().nullable()
}).strict();
export const StaffNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.StaffNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StaffNullableScalarRelationFilter>;
export const StaffNullableScalarRelationFilterObjectZodSchema = makeSchema();
