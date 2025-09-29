import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { FileUncheckedCreateNestedManyWithoutAdminInputObjectSchema as FileUncheckedCreateNestedManyWithoutAdminInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutAdminInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  password: z.string(),
  role: RoleSchema.optional().nullable(),
  name: z.string(),
  phone: z.string(),
  birthDate: z.coerce.date().optional().nullable(),
  avatarId: z.string().optional().nullable(),
  isRoot: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  uploads: z.lazy(() => FileUncheckedCreateNestedManyWithoutAdminInputObjectSchema)
}).strict();
export const AdminUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AdminUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUncheckedCreateInput>;
export const AdminUncheckedCreateInputObjectZodSchema = makeSchema();
