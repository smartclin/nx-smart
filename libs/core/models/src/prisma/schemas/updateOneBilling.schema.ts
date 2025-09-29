import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './objects/BillingInclude.schema';
import { BillingUpdateInputObjectSchema as BillingUpdateInputObjectSchema } from './objects/BillingUpdateInput.schema';
import { BillingUncheckedUpdateInputObjectSchema as BillingUncheckedUpdateInputObjectSchema } from './objects/BillingUncheckedUpdateInput.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './objects/BillingWhereUniqueInput.schema';

export const BillingUpdateOneSchema: z.ZodType<Prisma.BillingUpdateArgs> = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), data: z.union([BillingUpdateInputObjectSchema, BillingUncheckedUpdateInputObjectSchema]), where: BillingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingUpdateArgs>;

export const BillingUpdateOneZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), data: z.union([BillingUpdateInputObjectSchema, BillingUncheckedUpdateInputObjectSchema]), where: BillingWhereUniqueInputObjectSchema }).strict();