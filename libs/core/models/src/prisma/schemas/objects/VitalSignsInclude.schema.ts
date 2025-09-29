import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterArgsObjectSchema as EncounterArgsObjectSchema } from './EncounterArgs.schema';
import { MedicalRecordsArgsObjectSchema as MedicalRecordsArgsObjectSchema } from './MedicalRecordsArgs.schema'

const makeSchema = () => z.object({
  encounter: z.union([z.boolean(), z.lazy(() => EncounterArgsObjectSchema)]).optional(),
  medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsObjectSchema)]).optional()
}).strict();
export const VitalSignsIncludeObjectSchema: z.ZodType<Prisma.VitalSignsInclude> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsInclude>;
export const VitalSignsIncludeObjectZodSchema = makeSchema();
