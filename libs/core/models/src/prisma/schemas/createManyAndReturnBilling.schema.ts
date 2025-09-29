import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingSelectObjectSchema as BillingSelectObjectSchema } from './objects/BillingSelect.schema';
import { BillingCreateManyInputObjectSchema as BillingCreateManyInputObjectSchema } from './objects/BillingCreateManyInput.schema';

export const BillingCreateManyAndReturnSchema: z.ZodType<Prisma.BillingCreateManyAndReturnArgs> = z.object({ select: BillingSelectObjectSchema.optional(), data: z.union([ BillingCreateManyInputObjectSchema, z.array(BillingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BillingCreateManyAndReturnArgs>;

export const BillingCreateManyAndReturnZodSchema = z.object({ select: BillingSelectObjectSchema.optional(), data: z.union([ BillingCreateManyInputObjectSchema, z.array(BillingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();