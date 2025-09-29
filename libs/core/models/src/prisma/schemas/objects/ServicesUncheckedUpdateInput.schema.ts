import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema as NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema } from './NullableEnumServiceCategoryFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { LabTestUncheckedUpdateManyWithoutServicesNestedInputObjectSchema as LabTestUncheckedUpdateManyWithoutServicesNestedInputObjectSchema } from './LabTestUncheckedUpdateManyWithoutServicesNestedInput.schema';
import { PatientBillsUncheckedUpdateManyWithoutServiceNestedInputObjectSchema as PatientBillsUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './PatientBillsUncheckedUpdateManyWithoutServiceNestedInput.schema';
import { AppointmentUncheckedUpdateManyWithoutServiceNestedInputObjectSchema as AppointmentUncheckedUpdateManyWithoutServiceNestedInputObjectSchema } from './AppointmentUncheckedUpdateManyWithoutServiceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  serviceName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  category: z.union([ServiceCategorySchema, z.lazy(() => NullableEnumServiceCategoryFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  duration: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isAvailable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  labtests: z.lazy(() => LabTestUncheckedUpdateManyWithoutServicesNestedInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputObjectSchema).optional()
}).strict();
export const ServicesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ServicesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUncheckedUpdateInput>;
export const ServicesUncheckedUpdateInputObjectZodSchema = makeSchema();
