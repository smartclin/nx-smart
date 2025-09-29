import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { LabTestCreateNestedManyWithoutServicesInputObjectSchema as LabTestCreateNestedManyWithoutServicesInputObjectSchema } from './LabTestCreateNestedManyWithoutServicesInput.schema';
import { PatientBillsCreateNestedManyWithoutServiceInputObjectSchema as PatientBillsCreateNestedManyWithoutServiceInputObjectSchema } from './PatientBillsCreateNestedManyWithoutServiceInput.schema';
import { AppointmentCreateNestedManyWithoutServiceInputObjectSchema as AppointmentCreateNestedManyWithoutServiceInputObjectSchema } from './AppointmentCreateNestedManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.optional().nullable(),
  duration: z.number().int().optional().nullable(),
  isAvailable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  labtests: z.lazy(() => LabTestCreateNestedManyWithoutServicesInputObjectSchema),
  bills: z.lazy(() => PatientBillsCreateNestedManyWithoutServiceInputObjectSchema),
  appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputObjectSchema)
}).strict();
export const ServicesCreateInputObjectSchema: z.ZodType<Prisma.ServicesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateInput>;
export const ServicesCreateInputObjectZodSchema = makeSchema();
