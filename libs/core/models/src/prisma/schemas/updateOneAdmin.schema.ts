import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AdminSelectObjectSchema as AdminSelectObjectSchema } from './objects/AdminSelect.schema';
import { AdminIncludeObjectSchema as AdminIncludeObjectSchema } from './objects/AdminInclude.schema';
import { AdminUpdateInputObjectSchema as AdminUpdateInputObjectSchema } from './objects/AdminUpdateInput.schema';
import { AdminUncheckedUpdateInputObjectSchema as AdminUncheckedUpdateInputObjectSchema } from './objects/AdminUncheckedUpdateInput.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './objects/AdminWhereUniqueInput.schema';

export const AdminUpdateOneSchema: z.ZodType<Prisma.AdminUpdateArgs> = z.object({ select: AdminSelectObjectSchema.optional(), include: AdminIncludeObjectSchema.optional(), data: z.union([AdminUpdateInputObjectSchema, AdminUncheckedUpdateInputObjectSchema]), where: AdminWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AdminUpdateArgs>;

export const AdminUpdateOneZodSchema = z.object({ select: AdminSelectObjectSchema.optional(), include: AdminIncludeObjectSchema.optional(), data: z.union([AdminUpdateInputObjectSchema, AdminUncheckedUpdateInputObjectSchema]), where: AdminWhereUniqueInputObjectSchema }).strict();