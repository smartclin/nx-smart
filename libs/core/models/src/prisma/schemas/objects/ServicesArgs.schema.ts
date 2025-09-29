import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './ServicesSelect.schema';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './ServicesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServicesSelectObjectSchema).optional(),
  include: z.lazy(() => ServicesIncludeObjectSchema).optional()
}).strict();
export const ServicesArgsObjectSchema = makeSchema();
export const ServicesArgsObjectZodSchema = makeSchema();
