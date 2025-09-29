import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { BillingCreateManyInputObjectSchema as BillingCreateManyInputObjectSchema } from './objects/BillingCreateManyInput.schema';

export const BillingCreateManySchema: z.ZodType<Prisma.BillingCreateManyArgs> = z.object({ data: z.union([ BillingCreateManyInputObjectSchema, z.array(BillingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BillingCreateManyArgs>;

export const BillingCreateManyZodSchema = z.object({ data: z.union([ BillingCreateManyInputObjectSchema, z.array(BillingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();