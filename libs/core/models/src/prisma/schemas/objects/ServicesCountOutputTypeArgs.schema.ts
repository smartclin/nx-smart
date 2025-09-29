import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCountOutputTypeSelectObjectSchema as ServicesCountOutputTypeSelectObjectSchema } from './ServicesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServicesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ServicesCountOutputTypeArgsObjectSchema = makeSchema();
export const ServicesCountOutputTypeArgsObjectZodSchema = makeSchema();
