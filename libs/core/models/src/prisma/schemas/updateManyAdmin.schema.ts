import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AdminUpdateManyMutationInputObjectSchema as AdminUpdateManyMutationInputObjectSchema } from './objects/AdminUpdateManyMutationInput.schema';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './objects/AdminWhereInput.schema';

export const AdminUpdateManySchema: z.ZodType<Prisma.AdminUpdateManyArgs> = z.object({ data: AdminUpdateManyMutationInputObjectSchema, where: AdminWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AdminUpdateManyArgs>;

export const AdminUpdateManyZodSchema = z.object({ data: AdminUpdateManyMutationInputObjectSchema, where: AdminWhereInputObjectSchema.optional() }).strict();