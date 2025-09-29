import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesLabTestCreateManyServicesInputObjectSchema as LabTestCreateManyServicesInputObjectSchema } from './LabTestCreateManyServicesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LabTestCreateManyServicesInputObjectSchema), z.lazy(() => LabTestCreateManyServicesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LabTestCreateManyServicesInputEnvelopeObjectSchema: z.ZodType<Prisma.LabTestCreateManyServicesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateManyServicesInputEnvelope>;
export const LabTestCreateManyServicesInputEnvelopeObjectZodSchema = makeSchema();
