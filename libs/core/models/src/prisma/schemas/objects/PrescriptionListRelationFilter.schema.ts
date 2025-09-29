import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './PrescriptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PrescriptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => PrescriptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => PrescriptionWhereInputObjectSchema).optional()
}).strict();
export const PrescriptionListRelationFilterObjectSchema: z.ZodType<Prisma.PrescriptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionListRelationFilter>;
export const PrescriptionListRelationFilterObjectZodSchema = makeSchema();
