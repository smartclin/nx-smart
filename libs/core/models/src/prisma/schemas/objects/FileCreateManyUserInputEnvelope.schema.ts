import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserFileCreateManyUserInputObjectSchema as FileCreateManyUserInputObjectSchema } from './FileCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyUserInputObjectSchema), z.lazy(() => FileCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyUserInputEnvelope>;
export const FileCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
