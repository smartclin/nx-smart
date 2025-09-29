import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './objects/AppointmentInclude.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema';
import { AppointmentCreateInputObjectSchema as AppointmentCreateInputObjectSchema } from './objects/AppointmentCreateInput.schema';
import { AppointmentUncheckedCreateInputObjectSchema as AppointmentUncheckedCreateInputObjectSchema } from './objects/AppointmentUncheckedCreateInput.schema';
import { AppointmentUpdateInputObjectSchema as AppointmentUpdateInputObjectSchema } from './objects/AppointmentUpdateInput.schema';
import { AppointmentUncheckedUpdateInputObjectSchema as AppointmentUncheckedUpdateInputObjectSchema } from './objects/AppointmentUncheckedUpdateInput.schema';

export const AppointmentUpsertOneSchema: z.ZodType<Prisma.AppointmentUpsertArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), where: AppointmentWhereUniqueInputObjectSchema, create: z.union([ AppointmentCreateInputObjectSchema, AppointmentUncheckedCreateInputObjectSchema ]), update: z.union([ AppointmentUpdateInputObjectSchema, AppointmentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AppointmentUpsertArgs>;

export const AppointmentUpsertOneZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), include: AppointmentIncludeObjectSchema.optional(), where: AppointmentWhereUniqueInputObjectSchema, create: z.union([ AppointmentCreateInputObjectSchema, AppointmentUncheckedCreateInputObjectSchema ]), update: z.union([ AppointmentUpdateInputObjectSchema, AppointmentUncheckedUpdateInputObjectSchema ]) }).strict();