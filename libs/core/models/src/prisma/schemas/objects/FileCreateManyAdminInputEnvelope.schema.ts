import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminFileCreateManyAdminInputObjectSchema as FileCreateManyAdminInputObjectSchema } from './FileCreateManyAdminInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyAdminInputObjectSchema), z.lazy(() => FileCreateManyAdminInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyAdminInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyAdminInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyAdminInputEnvelope>;
export const FileCreateManyAdminInputEnvelopeObjectZodSchema = makeSchema();
