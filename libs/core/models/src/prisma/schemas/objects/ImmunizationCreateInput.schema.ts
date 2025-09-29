import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateNestedOneWithoutImmunizationsInputObjectSchema as PatientCreateNestedOneWithoutImmunizationsInputObjectSchema } from './PatientCreateNestedOneWithoutImmunizationsInput.schema';
import { StaffCreateNestedOneWithoutImmunizationsInputObjectSchema as StaffCreateNestedOneWithoutImmunizationsInputObjectSchema } from './StaffCreateNestedOneWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vaccine: z.string(),
  date: z.coerce.date(),
  dose: z.string().optional().nullable(),
  lotNumber: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutImmunizationsInputObjectSchema),
  administeredBy: z.lazy(() => StaffCreateNestedOneWithoutImmunizationsInputObjectSchema).optional()
}).strict();
export const ImmunizationCreateInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateInput>;
export const ImmunizationCreateInputObjectZodSchema = makeSchema();
