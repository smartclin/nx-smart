import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  some: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  none: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsListRelationFilterObjectSchema: z.ZodType<Prisma.MedicalRecordsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsListRelationFilter>;
export const MedicalRecordsListRelationFilterObjectZodSchema = makeSchema();
