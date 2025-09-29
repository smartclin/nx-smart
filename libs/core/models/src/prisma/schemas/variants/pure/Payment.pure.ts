import { z } from 'zod';

import { PaymentMethodSchema } from '../../enums/PaymentMethod.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentModelSchema = z.object({
    id: z.number().int(),
    billId: z.number().int().nullable(),
    patientId: z.string(),
    appointmentId: z.number().int(),
    billDate: z.date(),
    paymentDate: z.date(),
    discount: z.number(),
    totalAmount: z.number(),
    amountPaid: z.number(),
    paymentMethod: PaymentMethodSchema,
    status: PaymentStatusSchema,
    receiptNumber: z.number().int(),
    appointment: z.unknown(),
    patient: z.unknown(),
    bills: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PaymentModelType = z.infer<typeof PaymentModelSchema>;
