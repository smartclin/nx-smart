import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AdminCreateManyInputObjectSchema as AdminCreateManyInputObjectSchema } from './objects/AdminCreateManyInput.schema';

export const AdminCreateManySchema: z.ZodType<Prisma.AdminCreateManyArgs> = z.object({ data: z.union([ AdminCreateManyInputObjectSchema, z.array(AdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AdminCreateManyArgs>;

export const AdminCreateManyZodSchema = z.object({ data: z.union([ AdminCreateManyInputObjectSchema, z.array(AdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();