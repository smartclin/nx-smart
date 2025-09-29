import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './AppointmentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AppointmentWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => AppointmentWhereInputObjectSchema).optional().nullable()
}).strict();
export const AppointmentNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AppointmentNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AppointmentNullableScalarRelationFilter>;
export const AppointmentNullableScalarRelationFilterObjectZodSchema = makeSchema();
