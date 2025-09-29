import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminCountOutputTypeSelectObjectSchema as AdminCountOutputTypeSelectObjectSchema } from './AdminCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AdminCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AdminCountOutputTypeArgsObjectSchema = makeSchema();
export const AdminCountOutputTypeArgsObjectZodSchema = makeSchema();
