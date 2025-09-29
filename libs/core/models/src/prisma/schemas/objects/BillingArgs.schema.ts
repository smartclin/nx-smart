import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './BillingSelect.schema';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './BillingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BillingSelectObjectSchema).optional(),
  include: z.lazy(() => BillingIncludeObjectSchema).optional()
}).strict();
export const BillingArgsObjectSchema = makeSchema();
export const BillingArgsObjectZodSchema = makeSchema();
