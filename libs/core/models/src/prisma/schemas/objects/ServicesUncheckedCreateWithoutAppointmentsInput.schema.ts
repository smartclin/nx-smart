import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema as LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateNestedManyWithoutServicesInput.schema';
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.optional().nullable(),
  duration: z.number().int().optional().nullable(),
  isAvailable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  labtests: z.lazy(() => LabTestUncheckedCreateNestedManyWithoutServicesInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServicesUncheckedCreateWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesUncheckedCreateWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUncheckedCreateWithoutAppointmentsInput>;
export const ServicesUncheckedCreateWithoutAppointmentsInputObjectZodSchema = makeSchema();
