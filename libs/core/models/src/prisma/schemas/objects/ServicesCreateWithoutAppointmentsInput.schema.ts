import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { LabTestCreateNestedManyWithoutServicesInputObjectSchema as LabTestCreateNestedManyWithoutServicesInputObjectSchema } from './LabTestCreateNestedManyWithoutServicesInput.schema';
import { PatientBillsCreateNestedManyWithoutServiceInputObjectSchema as PatientBillsCreateNestedManyWithoutServiceInputObjectSchema } from './PatientBillsCreateNestedManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.optional().nullable(),
  duration: z.number().int().optional().nullable(),
  isAvailable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  labtests: z.lazy(() => LabTestCreateNestedManyWithoutServicesInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServicesCreateWithoutAppointmentsInputObjectSchema: z.ZodType<Prisma.ServicesCreateWithoutAppointmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateWithoutAppointmentsInput>;
export const ServicesCreateWithoutAppointmentsInputObjectZodSchema = makeSchema();
