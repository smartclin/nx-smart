import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentUpdateManyMutationInputObjectSchema as AppointmentUpdateManyMutationInputObjectSchema } from './objects/AppointmentUpdateManyMutationInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema';

export const AppointmentUpdateManySchema: z.ZodType<Prisma.AppointmentUpdateManyArgs> = z.object({ data: AppointmentUpdateManyMutationInputObjectSchema, where: AppointmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentUpdateManyArgs>;

export const AppointmentUpdateManyZodSchema = z.object({ data: AppointmentUpdateManyMutationInputObjectSchema, where: AppointmentWhereInputObjectSchema.optional() }).strict();