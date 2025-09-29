import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationSelectObjectSchema as ImmunizationSelectObjectSchema } from './ImmunizationSelect.schema';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './ImmunizationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ImmunizationSelectObjectSchema).optional(),
  include: z.lazy(() => ImmunizationIncludeObjectSchema).optional()
}).strict();
export const ImmunizationArgsObjectSchema = makeSchema();
export const ImmunizationArgsObjectZodSchema = makeSchema();
