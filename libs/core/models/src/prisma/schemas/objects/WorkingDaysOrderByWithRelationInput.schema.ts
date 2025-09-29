import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  day: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  closeTime: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkingDaysOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkingDaysOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysOrderByWithRelationInput>;
export const WorkingDaysOrderByWithRelationInputObjectZodSchema = makeSchema();
