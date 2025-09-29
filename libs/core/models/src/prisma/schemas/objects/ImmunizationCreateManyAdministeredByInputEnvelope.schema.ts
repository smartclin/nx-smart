import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdministeredByImmunizationCreateManyAdministeredByInputObjectSchema as ImmunizationCreateManyAdministeredByInputObjectSchema } from './ImmunizationCreateManyAdministeredByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImmunizationCreateManyAdministeredByInputObjectSchema), z.lazy(() => ImmunizationCreateManyAdministeredByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema: z.ZodType<Prisma.ImmunizationCreateManyAdministeredByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateManyAdministeredByInputEnvelope>;
export const ImmunizationCreateManyAdministeredByInputEnvelopeObjectZodSchema = makeSchema();
