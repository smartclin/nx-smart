import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PaymentIncludeObjectSchema as PaymentIncludeObjectSchema } from './objects/PaymentInclude.schema';
import { PaymentOrderByWithRelationInputObjectSchema as PaymentOrderByWithRelationInputObjectSchema } from './objects/PaymentOrderByWithRelationInput.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './objects/PaymentWhereInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './objects/PaymentWhereUniqueInput.schema';
import { PaymentScalarFieldEnumSchema } from './enums/PaymentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentFindManySelectSchema: z.ZodType<Prisma.PaymentSelect> = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    patientId: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    billDate: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    discount: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    amountPaid: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    status: z.boolean().optional(),
    receiptNumber: z.boolean().optional(),
    appointment: z.boolean().optional(),
    patient: z.boolean().optional(),
    bills: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PaymentSelect>;

export const PaymentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    patientId: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    billDate: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    discount: z.boolean().optional(),
    totalAmount: z.boolean().optional(),
    amountPaid: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    status: z.boolean().optional(),
    receiptNumber: z.boolean().optional(),
    appointment: z.boolean().optional(),
    patient: z.boolean().optional(),
    bills: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PaymentFindManySchema: z.ZodType<Prisma.PaymentFindManyArgs> = z.object({ select: PaymentFindManySelectSchema.optional(), include: z.lazy(() => PaymentIncludeObjectSchema.optional()), orderBy: z.union([PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PaymentWhereInputObjectSchema.optional(), cursor: PaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PaymentFindManyArgs>;

export const PaymentFindManyZodSchema = z.object({ select: PaymentFindManySelectSchema.optional(), include: z.lazy(() => PaymentIncludeObjectSchema.optional()), orderBy: z.union([PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PaymentWhereInputObjectSchema.optional(), cursor: PaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array()]).optional() }).strict();