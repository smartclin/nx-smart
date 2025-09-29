import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientArgsObjectSchema as PatientArgsObjectSchema } from './PatientArgs.schema'

const makeSchema = () => z.object({
  patient: z.union([z.boolean(), z.lazy(() => PatientArgsObjectSchema)]).optional()
}).strict();
export const FeedingLogIncludeObjectSchema: z.ZodType<Prisma.FeedingLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogInclude>;
export const FeedingLogIncludeObjectZodSchema = makeSchema();
