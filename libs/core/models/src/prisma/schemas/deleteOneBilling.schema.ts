import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingIncludeObjectSchema as BillingIncludeObjectSchema } from './objects/BillingInclude.schema';
import { BillingWhereUniqueInputObjectSchema as BillingWhereUniqueInputObjectSchema } from './objects/BillingWhereUniqueInput.schema';

export const BillingDeleteOneSchema: z.ZodType<Prisma.BillingDeleteArgs> = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), where: BillingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BillingDeleteArgs>;

export const BillingDeleteOneZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), include: BillingIncludeObjectSchema.optional(), where: BillingWhereUniqueInputObjectSchema }).strict();