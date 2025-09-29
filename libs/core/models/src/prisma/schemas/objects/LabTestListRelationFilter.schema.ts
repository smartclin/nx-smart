import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './LabTestWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LabTestWhereInputObjectSchema).optional(),
  some: z.lazy(() => LabTestWhereInputObjectSchema).optional(),
  none: z.lazy(() => LabTestWhereInputObjectSchema).optional()
}).strict();
export const LabTestListRelationFilterObjectSchema: z.ZodType<Prisma.LabTestListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LabTestListRelationFilter>;
export const LabTestListRelationFilterObjectZodSchema = makeSchema();
