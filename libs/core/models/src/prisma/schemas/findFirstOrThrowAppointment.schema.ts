import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentIncludeObjectSchema as AppointmentIncludeObjectSchema } from './objects/AppointmentInclude.schema';
import { AppointmentOrderByWithRelationInputObjectSchema as AppointmentOrderByWithRelationInputObjectSchema } from './objects/AppointmentOrderByWithRelationInput.schema';
import { AppointmentWhereInputObjectSchema as AppointmentWhereInputObjectSchema } from './objects/AppointmentWhereInput.schema';
import { AppointmentWhereUniqueInputObjectSchema as AppointmentWhereUniqueInputObjectSchema } from './objects/AppointmentWhereUniqueInput.schema';
import { AppointmentScalarFieldEnumSchema } from './enums/AppointmentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppointmentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AppointmentSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    appointmentDate: z.boolean().optional(),
    time: z.boolean().optional(),
    status: z.boolean().optional(),
    type: z.boolean().optional(),
    note: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctor: z.boolean().optional(),
    service: z.boolean().optional(),
    bills: z.boolean().optional(),
    medical: z.boolean().optional(),
    reminders: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Billing: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AppointmentSelect>;

export const AppointmentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    appointmentDate: z.boolean().optional(),
    time: z.boolean().optional(),
    status: z.boolean().optional(),
    type: z.boolean().optional(),
    note: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctor: z.boolean().optional(),
    service: z.boolean().optional(),
    bills: z.boolean().optional(),
    medical: z.boolean().optional(),
    reminders: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Billing: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AppointmentFindFirstOrThrowSchema: z.ZodType<Prisma.AppointmentFindFirstOrThrowArgs> = z.object({ select: AppointmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AppointmentIncludeObjectSchema.optional()), orderBy: z.union([AppointmentOrderByWithRelationInputObjectSchema, AppointmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppointmentWhereInputObjectSchema.optional(), cursor: AppointmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentFindFirstOrThrowArgs>;

export const AppointmentFindFirstOrThrowZodSchema = z.object({ select: AppointmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AppointmentIncludeObjectSchema.optional()), orderBy: z.union([AppointmentOrderByWithRelationInputObjectSchema, AppointmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppointmentWhereInputObjectSchema.optional(), cursor: AppointmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppointmentScalarFieldEnumSchema, AppointmentScalarFieldEnumSchema.array()]).optional() }).strict();