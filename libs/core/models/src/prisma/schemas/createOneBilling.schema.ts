import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './objects/BillingInclude.schema';
import { BillingCreateInputObjectSchema as BillingCreateInputObjectSchema } from './objects/BillingCreateInput.schema';
import { BillingUncheckedCreateInputObjectSchema as BillingUncheckedCreateInputObjectSchema } from './objects/BillingUncheckedCreateInput.schema';

export const BillingCreateOneSchema: z.ZodType<Prisma.BillingCreateArgs> = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), data: z.union([BillingCreateInputObjectSchema, BillingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BillingCreateArgs>;

export const BillingCreateOneZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), data: z.union([BillingCreateInputObjectSchema, BillingUncheckedCreateInputObjectSchema]) }).strict();