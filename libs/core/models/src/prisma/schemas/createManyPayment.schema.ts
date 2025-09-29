import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PaymentCreateManyInputObjectSchema as PaymentCreateManyInputObjectSchema } from './objects/PaymentCreateManyInput.schema';

export const PaymentCreateManySchema: z.ZodType<Prisma.PaymentCreateManyArgs> = z.object({ data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PaymentCreateManyArgs>;

export const PaymentCreateManyZodSchema = z.object({ data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();