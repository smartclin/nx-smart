import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LabTestOrderByRelationAggregateInputObjectSchema as LabTestOrderByRelationAggregateInputObjectSchema } from './LabTestOrderByRelationAggregateInput.schema';
import { PatientBillsOrderByRelationAggregateInputObjectSchema as PatientBillsOrderByRelationAggregateInputObjectSchema } from './PatientBillsOrderByRelationAggregateInput.schema';
import { AppointmentOrderByRelationAggregateInputObjectSchema as AppointmentOrderByRelationAggregateInputObjectSchema } from './AppointmentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  serviceName: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isAvailable: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  labtests: z.lazy(() => LabTestOrderByRelationAggregateInputObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsOrderByRelationAggregateInputObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ServicesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServicesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesOrderByWithRelationInput>;
export const ServicesOrderByWithRelationInputObjectZodSchema = makeSchema();
