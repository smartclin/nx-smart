import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './objects/BillingWhereInput.schema';

export const BillingDeleteManySchema: z.ZodType<Prisma.BillingDeleteManyArgs> = z.object({ where: BillingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingDeleteManyArgs>;

export const BillingDeleteManyZodSchema = z.object({ where: BillingWhereInputObjectSchema.optional() }).strict();