import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateNestedOneWithoutImmunizationsInputObjectSchema as StaffCreateNestedOneWithoutImmunizationsInputObjectSchema } from './StaffCreateNestedOneWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vaccine: z.string(),
  date: z.coerce.date(),
  dose: z.string().optional().nullable(),
  lotNumber: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  administeredBy: z.lazy(() => StaffCreateNestedOneWithoutImmunizationsInputObjectSchema).optional()
}).strict();
export const ImmunizationCreateWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateWithoutPatientInput>;
export const ImmunizationCreateWithoutPatientInputObjectZodSchema = makeSchema();
