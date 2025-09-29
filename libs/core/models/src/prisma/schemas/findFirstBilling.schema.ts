import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './objects/BillingInclude.schema';
import { BillingOrderByWithRelationInputObjectSchema as BillingOrderByWithRelationInputObjectSchema } from './objects/BillingOrderByWithRelationInput.schema';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './objects/BillingWhereInput.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './objects/BillingWhereUniqueInput.schema';
import { BillingScalarFieldEnumSchema } from './enums/BillingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BillingFindFirstSelectSchema: z.ZodType<Prisma.BillingSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    appointment: z.boolean().optional(),
    amount: z.boolean().optional(),
    status: z.boolean().optional(),
    insurance: z.boolean().optional(),
    insuranceId: z.boolean().optional(),
    serviceDate: z.boolean().optional(),
    dueDate: z.boolean().optional(),
    paidDate: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BillingSelect>;

export const BillingFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    appointment: z.boolean().optional(),
    amount: z.boolean().optional(),
    status: z.boolean().optional(),
    insurance: z.boolean().optional(),
    insuranceId: z.boolean().optional(),
    serviceDate: z.boolean().optional(),
    dueDate: z.boolean().optional(),
    paidDate: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BillingFindFirstSchema: z.ZodType<Prisma.BillingFindFirstArgs> = z.object({ select: BillingFindFirstSelectSchema.optional(), include: z.lazy(() => BillingIncludeObjectSchema.optional()), orderBy: z.union([BillingOrderByWithRelationInputObjectSchema, BillingOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingWhereInputObjectSchema.optional(), cursor: BillingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillingScalarFieldEnumSchema, BillingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BillingFindFirstArgs>;

export const BillingFindFirstZodSchema = z.object({ select: BillingFindFirstSelectSchema.optional(), include: z.lazy(() => BillingIncludeObjectSchema.optional()), orderBy: z.union([BillingOrderByWithRelationInputObjectSchema, BillingOrderByWithRelationInputObjectSchema.array()]).optional(), where: BillingWhereInputObjectSchema.optional(), cursor: BillingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BillingScalarFieldEnumSchema, BillingScalarFieldEnumSchema.array()]).optional() }).strict();