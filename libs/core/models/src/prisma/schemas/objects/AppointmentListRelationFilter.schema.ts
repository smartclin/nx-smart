import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentListRelationFilterObjectSchema: z.ZodType<Prisma.AppointmentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentListRelationFilter>;
export const AppointmentListRelationFilterObjectZodSchema = makeSchema();
