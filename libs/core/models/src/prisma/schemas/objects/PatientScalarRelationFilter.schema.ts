import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientScalarRelationFilterObjectSchema: z.ZodType<Prisma.PatientScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PatientScalarRelationFilter>;
export const PatientScalarRelationFilterObjectZodSchema = makeSchema();
