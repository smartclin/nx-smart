import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterArgsObjectSchema as EncounterArgsObjectSchema } from './EncounterArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  encounterId: z.boolean().optional(),
  encounter: z.union([z.boolean(), z.lazy(() => EncounterArgsObjectSchema)]).optional(),
  patientId: z.boolean().optional(),
  medicalId: z.boolean().optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional(),
  height: z.boolean().optional(),
  weight: z.boolean().optional(),
  temperature: z.boolean().optional(),
  systolic: z.boolean().optional(),
  diastolic: z.boolean().optional(),
  heartRate: z.boolean().optional(),
  respiratoryRate: z.boolean().optional(),
  oxygenSaturation: z.boolean().optional(),
  recordedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const VitalSignsSelectObjectSchema: z.ZodType<Prisma.VitalSignsSelect> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsSelect>;
export const VitalSignsSelectObjectZodSchema = makeSchema();
