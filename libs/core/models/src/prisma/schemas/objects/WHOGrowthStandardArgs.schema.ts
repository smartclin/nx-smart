import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WHOGrowthStandardSelectObjectSchema as WHOGrowthStandardSelectObjectSchema } from './WHOGrowthStandardSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WHOGrowthStandardSelectObjectSchema).optional()
}).strict();
export const WHOGrowthStandardArgsObjectSchema = makeSchema();
export const WHOGrowthStandardArgsObjectZodSchema = makeSchema();
