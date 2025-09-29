import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingUpdateManyMutationInputObjectSchema as BillingUpdateManyMutationInputObjectSchema } from './objects/BillingUpdateManyMutationInput.schema';
import { BillingWhereInputObjectSchema as BillingWhereInputObjectSchema } from './objects/BillingWhereInput.schema';

export const BillingUpdateManyAndReturnSchema: z.ZodType<Prisma.BillingUpdateManyAndReturnArgs> = z.object({ select: BillingSelectObjectSchema.optional(), data: BillingUpdateManyMutationInputObjectSchema, where: BillingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BillingUpdateManyAndReturnArgs>;

export const BillingUpdateManyAndReturnZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), data: BillingUpdateManyMutationInputObjectSchema, where: BillingWhereInputObjectSchema.optional() }).strict();