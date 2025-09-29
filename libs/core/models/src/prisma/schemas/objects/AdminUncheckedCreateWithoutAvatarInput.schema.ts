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
  isRoot: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  uploads: z.lazy(() => FileUncheckedCreateNestedManyWithoutAdminInputObjectSchema).optional()
}).strict();
export const AdminUncheckedCreateWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminUncheckedCreateWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUncheckedCreateWithoutAvatarInput>;
export const AdminUncheckedCreateWithoutAvatarInputObjectZodSchema = makeSchema();
