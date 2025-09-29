import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AppointmentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AppointmentWhereInputObjectSchema).optional()
}).strict();
export const AppointmentScalarRelationFilterObjectSchema: z.ZodType<Prisma.AppointmentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentScalarRelationFilter>;
export const AppointmentScalarRelationFilterObjectZodSchema = makeSchema();
