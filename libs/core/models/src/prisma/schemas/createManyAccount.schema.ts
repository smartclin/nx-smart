import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AccountCreateManyInputObjectSchema as AccountCreateManyInputObjectSchema } from './objects/AccountCreateManyInput.schema';

export const AccountCreateManySchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AccountCreateManyArgs>;

export const AccountCreateManyZodSchema = z.object({ data: z.union([ AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();