import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema'

const makeSchema = () => z.object({
  set: ServiceCategorySchema.optional()
}).strict();
export const NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumServiceCategoryFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumServiceCategoryFieldUpdateOperationsInput>;
export const NullableEnumServiceCategoryFieldUpdateOperationsInputObjectZodSchema = makeSchema();
