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
import { PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema as PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema } from './PatientBillsUpdateManyWithoutServiceNestedInput.schema';
import { AppointmentUpdateManyWithoutServiceNestedInputObjectSchema as AppointmentUpdateManyWithoutServiceNestedInputObjectSchema } from './AppointmentUpdateManyWithoutServiceNestedInput.schema'

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
  bills: z.lazy(() => PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputObjectSchema).optional()
}).strict();
export const ServicesUpdateInputObjectSchema: z.ZodType<Prisma.ServicesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateInput>;
export const ServicesUpdateInputObjectZodSchema = makeSchema();
