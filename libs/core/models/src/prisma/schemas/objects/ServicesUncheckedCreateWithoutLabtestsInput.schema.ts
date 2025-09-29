import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
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
  updatedAt: z.coerce.date().optional(),
  bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputObjectSchema).optional()
}).strict();
export const ServicesUncheckedCreateWithoutLabtestsInputObjectSchema: z.ZodType<Prisma.ServicesUncheckedCreateWithoutLabtestsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUncheckedCreateWithoutLabtestsInput>;
export const ServicesUncheckedCreateWithoutLabtestsInputObjectZodSchema = makeSchema();
