import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateNestedOneWithoutImmunizationsInputObjectSchema as PatientCreateNestedOneWithoutImmunizationsInputObjectSchema } from './PatientCreateNestedOneWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  vaccine: z.string(),
  date: z.coerce.date(),
  dose: z.string().optional().nullable(),
  lotNumber: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutImmunizationsInputObjectSchema)
}).strict();
export const ImmunizationCreateWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateWithoutAdministeredByInput>;
export const ImmunizationCreateWithoutAdministeredByInputObjectZodSchema = makeSchema();
