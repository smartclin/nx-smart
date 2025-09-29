import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentUpdateManyMutationInputObjectSchema as AppointmentUpdateManyMutationInputObjectSchema } from './objects/AppointmentUpdateManyMutationInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema';

export const AppointmentUpdateManyAndReturnSchema: z.ZodType<Prisma.AppointmentUpdateManyAndReturnArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), data: AppointmentUpdateManyMutationInputObjectSchema, where: AppointmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentUpdateManyAndReturnArgs>;

export const AppointmentUpdateManyAndReturnZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), data: AppointmentUpdateManyMutationInputObjectSchema, where: AppointmentWhereInputObjectSchema.optional() }).strict();