import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServicesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ServicesWhereInputObjectSchema).optional()
}).strict();
export const ServicesScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServicesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServicesScalarRelationFilter>;
export const ServicesScalarRelationFilterObjectZodSchema = makeSchema();
