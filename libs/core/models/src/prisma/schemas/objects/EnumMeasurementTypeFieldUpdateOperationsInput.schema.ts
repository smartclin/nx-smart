import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MeasurementTypeSchema } from '../enums/MeasurementType.schema'

const makeSchema = () => z.object({
  set: MeasurementTypeSchema.optional()
}).strict();
export const EnumMeasurementTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMeasurementTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumMeasurementTypeFieldUpdateOperationsInput>;
export const EnumMeasurementTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
