import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { TwoFactorCreateManyInputObjectSchema as TwoFactorCreateManyInputObjectSchema } from './objects/TwoFactorCreateManyInput.schema';

export const TwoFactorCreateManySchema: z.ZodType<Prisma.TwoFactorCreateManyArgs> = z.object({ data: z.union([ TwoFactorCreateManyInputObjectSchema, z.array(TwoFactorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorCreateManyArgs>;

export const TwoFactorCreateManyZodSchema = z.object({ data: z.union([ TwoFactorCreateManyInputObjectSchema, z.array(TwoFactorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();