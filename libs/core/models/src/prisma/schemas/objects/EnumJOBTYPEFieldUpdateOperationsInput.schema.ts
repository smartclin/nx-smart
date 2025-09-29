import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { JOBTYPESchema } from '../enums/JOBTYPE.schema'

const makeSchema = () => z.object({
  set: JOBTYPESchema.optional()
}).strict();
export const EnumJOBTYPEFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumJOBTYPEFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumJOBTYPEFieldUpdateOperationsInput>;
export const EnumJOBTYPEFieldUpdateOperationsInputObjectZodSchema = makeSchema();
