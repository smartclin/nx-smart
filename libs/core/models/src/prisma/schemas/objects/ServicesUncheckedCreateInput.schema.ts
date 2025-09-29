import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema as LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateNestedManyWithoutServicesInput.schema';
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInput.schema';
import { AppointmentUncheckedCreateNestedManyWithoutServiceInputObjectSchema as AppointmentUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './AppointmentUncheckedCreateNestedManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.optional().nullable(),
  duration: z.number().int().optional().nullable(),
  isAvailable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  labtests: z.lazy(() => LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema),
  bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputObjectSchema)
}).strict();
export const ServicesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServicesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUncheckedCreateInput>;
export const ServicesUncheckedCreateInputObjectZodSchema = makeSchema();
