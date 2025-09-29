import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './objects/AppointmentInclude.schema';
import { AppointmentCreateInputObjectSchema as AppointmentCreateInputObjectSchema } from './objects/AppointmentCreateInput.schema';
import { AppointmentUncheckedCreateInputObjectSchema as AppointmentUncheckedCreateInputObjectSchema } from './objects/AppointmentUncheckedCreateInput.schema';

export const AppointmentCreateOneSchema: z.ZodType<Prisma.AppointmentCreateArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), data: z.union([AppointmentCreateInputObjectSchema, AppointmentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AppointmentCreateArgs>;

export const AppointmentCreateOneZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), data: z.union([AppointmentCreateInputObjectSchema, AppointmentUncheckedCreateInputObjectSchema]) }).strict();