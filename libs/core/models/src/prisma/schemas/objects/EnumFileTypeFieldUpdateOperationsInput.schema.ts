import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileTypeSchema } from '../enums/FileType.schema'

const makeSchema = () => z.object({
  set: FileTypeSchema.optional()
}).strict();
export const EnumFileTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFileTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumFileTypeFieldUpdateOperationsInput>;
export const EnumFileTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
