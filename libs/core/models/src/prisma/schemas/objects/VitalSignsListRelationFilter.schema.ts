import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './VitalSignsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VitalSignsWhereInputObjectSchema).optional(),
  some: z.lazy(() => VitalSignsWhereInputObjectSchema).optional(),
  none: z.lazy(() => VitalSignsWhereInputObjectSchema).optional()
}).strict();
export const VitalSignsListRelationFilterObjectSchema: z.ZodType<Prisma.VitalSignsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsListRelationFilter>;
export const VitalSignsListRelationFilterObjectZodSchema = makeSchema();
