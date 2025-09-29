import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  patientId: z.string(),
  date: z.coerce.date().optional(),
  type: FeedingTypeSchema,
  duration: z.number().int().optional().nullable(),
  amount: z.number().optional().nullable(),
  breast: z.string().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict();
export const FeedingLogCreateManyInputObjectSchema: z.ZodType<Prisma.FeedingLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogCreateManyInput>;
export const FeedingLogCreateManyInputObjectZodSchema = makeSchema();
