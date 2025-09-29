import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCountOutputTypeSelectObjectSchema as UserCountOutputTypeSelectObjectSchema } from './UserCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UserCountOutputTypeArgsObjectSchema = makeSchema();
export const UserCountOutputTypeArgsObjectZodSchema = makeSchema();
