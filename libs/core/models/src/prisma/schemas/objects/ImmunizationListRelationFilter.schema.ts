import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './ImmunizationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ImmunizationWhereInputObjectSchema).optional(),
  some: z.lazy(() => ImmunizationWhereInputObjectSchema).optional(),
  none: z.lazy(() => ImmunizationWhereInputObjectSchema).optional()
}).strict();
export const ImmunizationListRelationFilterObjectSchema: z.ZodType<Prisma.ImmunizationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationListRelationFilter>;
export const ImmunizationListRelationFilterObjectZodSchema = makeSchema();
