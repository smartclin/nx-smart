import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema';
import { PatientCreateNestedOneWithoutFeedingLogsInputObjectSchema as PatientCreateNestedOneWithoutFeedingLogsInputObjectSchema } from './PatientCreateNestedOneWithoutFeedingLogsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  date: z.coerce.date().optional(),
  type: FeedingTypeSchema,
  duration: z.number().int().optional().nullable(),
  amount: z.number().optional().nullable(),
  breast: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutFeedingLogsInputObjectSchema)
}).strict();
export const FeedingLogCreateInputObjectSchema: z.ZodType<Prisma.FeedingLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogCreateInput>;
export const FeedingLogCreateInputObjectZodSchema = makeSchema();
