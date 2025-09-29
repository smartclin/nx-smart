import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GenderSchema } from '../enums/Gender.schema'

const makeSchema = () => z.object({
  set: GenderSchema.optional()
}).strict();
export const EnumGenderFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput>;
export const EnumGenderFieldUpdateOperationsInputObjectZodSchema = makeSchema();
