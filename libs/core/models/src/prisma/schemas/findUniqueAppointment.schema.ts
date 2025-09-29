import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './objects/AppointmentInclude.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema';

export const AppointmentFindUniqueSchema: z.ZodType<Prisma.AppointmentFindUniqueArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), where: AppointmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AppointmentFindUniqueArgs>;

export const AppointmentFindUniqueZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), where: AppointmentWhereUniqueInputObjectSchema }).strict();