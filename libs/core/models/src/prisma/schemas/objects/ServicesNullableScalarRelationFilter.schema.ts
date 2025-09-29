import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServicesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ServicesWhereInputObjectSchema).optional().nullable()
}).strict();
export const ServicesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServicesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServicesNullableScalarRelationFilter>;
export const ServicesNullableScalarRelationFilterObjectZodSchema = makeSchema();
