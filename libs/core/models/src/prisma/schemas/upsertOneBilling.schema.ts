import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './objects/BillingInclude.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './objects/BillingWhereUniqueInput.schema';
import { BillingCreateInputObjectSchema as BillingCreateInputObjectSchema } from './objects/BillingCreateInput.schema';
import { BillingUncheckedCreateInputObjectSchema as BillingUncheckedCreateInputObjectSchema } from './objects/BillingUncheckedCreateInput.schema';
import { BillingUpdateInputObjectSchema as BillingUpdateInputObjectSchema } from './objects/BillingUpdateInput.schema';
import { BillingUncheckedUpdateInputObjectSchema as BillingUncheckedUpdateInputObjectSchema } from './objects/BillingUncheckedUpdateInput.schema';

export const BillingUpsertOneSchema: z.ZodType<Prisma.BillingUpsertArgs> = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), where: BillingWhereUniqueInputObjectSchema, create: z.union([ BillingCreateInputObjectSchema, BillingUncheckedCreateInputObjectSchema ]), update: z.union([ BillingUpdateInputObjectSchema, BillingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BillingUpsertArgs>;

export const BillingUpsertOneZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), where: BillingWhereUniqueInputObjectSchema, create: z.union([ BillingCreateInputObjectSchema, BillingUncheckedCreateInputObjectSchema ]), update: z.union([ BillingUpdateInputObjectSchema, BillingUncheckedUpdateInputObjectSchema ]) }).strict();