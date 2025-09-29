import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './PatientOrderByWithRelationInput.schema';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './AppointmentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  patientId: SortOrderSchema.optional(),
  appointmentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  insurance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  insuranceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  serviceDate: SortOrderSchema.optional(),
  dueDate: SortOrderSchema.optional(),
  paidDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputObjectSchema).optional(),
  appointment: z.lazy(() => AppointmentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BillingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BillingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BillingOrderByWithRelationInput>;
export const BillingOrderByWithRelationInputObjectZodSchema = makeSchema();
