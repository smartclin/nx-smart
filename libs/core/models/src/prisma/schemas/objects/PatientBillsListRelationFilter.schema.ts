import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './PatientBillsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PatientBillsWhereInputObjectSchema).optional(),
  some: z.lazy(() => PatientBillsWhereInputObjectSchema).optional(),
  none: z.lazy(() => PatientBillsWhereInputObjectSchema).optional()
}).strict();
export const PatientBillsListRelationFilterObjectSchema: z.ZodType<Prisma.PatientBillsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsListRelationFilter>;
export const PatientBillsListRelationFilterObjectZodSchema = makeSchema();
