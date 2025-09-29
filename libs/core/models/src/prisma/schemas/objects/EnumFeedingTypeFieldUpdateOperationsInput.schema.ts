import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingTypeSchema } from '../enums/FeedingType.schema'

const makeSchema = () => z.object({
  set: FeedingTypeSchema.optional()
}).strict();
export const EnumFeedingTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFeedingTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumFeedingTypeFieldUpdateOperationsInput>;
export const EnumFeedingTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
