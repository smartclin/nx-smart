import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsScalarRelationFilterObjectSchema: z.ZodType<Prisma.MedicalRecordsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsScalarRelationFilter>;
export const MedicalRecordsScalarRelationFilterObjectZodSchema = makeSchema();
