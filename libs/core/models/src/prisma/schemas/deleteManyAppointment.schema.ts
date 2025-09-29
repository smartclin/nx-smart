import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema';

export const AppointmentDeleteManySchema: z.ZodType<Prisma.AppointmentDeleteManyArgs> = z.object({ where: AppointmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentDeleteManyArgs>;

export const AppointmentDeleteManyZodSchema = z.object({ where: AppointmentWhereInputObjectSchema.optional() }).strict();