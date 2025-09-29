import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema as NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumServiceCategoryFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LabTestUpdateManyWithoutServicesNestedInputObjectSchema as LabTestUpdateManyWithoutServicesNestedInputObjectSchema } from './LabTestUpdateManyWithoutServicesNestedInput.schema';
import { PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema as PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema } from './PatientBillsUpdateManyWithoutServiceNestedInput.schema'

const makeSchema = () => z.object({
  serviceName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([ServiceCategorySchema, z.lazy(() => NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isAvailable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  labtests: z.lazy(() => LabTestUpdateManyWithoutServicesNestedInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema).optional()
}).strict();
export const ServicesUpdateWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesUpdateWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateWithoutAppointmentsInput>;
export const ServicesUpdateWithoutAppointmentsInputObjectZodSchema = makeSchema();
