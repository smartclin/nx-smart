import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './objects/AppointmentInclude.schema';
import { AppointmentUpdateInputObjectSchema as AppointmentUpdateInputObjectSchema } from './objects/AppointmentUpdateInput.schema';
import { AppointmentUncheckedUpdateInputObjectSchema as AppointmentUncheckedUpdateInputObjectSchema } from './objects/AppointmentUncheckedUpdateInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema';

export const AppointmentUpdateOneSchema: z.ZodType<Prisma.AppointmentUpdateArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), data: z.union([AppointmentUpdateInputObjectSchema, AppointmentUncheckedUpdateInputObjectSchema]), where: AppointmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppointmentUpdateArgs>;

export const AppointmentUpdateOneZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), data: z.union([AppointmentUpdateInputObjectSchema, AppointmentUncheckedUpdateInputObjectSchema]), where: AppointmentWhereUniqueInputObjectSchema }).strict();