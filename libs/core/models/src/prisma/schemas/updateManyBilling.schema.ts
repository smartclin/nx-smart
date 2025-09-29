import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingUpdateManyMutationInputObjectSchema as BillingUpdateManyMutationInputObjectSchema } from './objects/BillingUpdateManyMutationInput.schema';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './objects/BillingWhereInput.schema';

export const BillingUpdateManySchema: z.ZodType<Prisma.BillingUpdateManyArgs> = z.object({ data: BillingUpdateManyMutationInputObjectSchema, where: BillingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingUpdateManyArgs>;

export const BillingUpdateManyZodSchema = z.object({ data: BillingUpdateManyMutationInputObjectSchema, where: BillingWhereInputObjectSchema.optional() }).strict();