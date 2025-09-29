import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { FileCreateNestedOneWithoutAdminsInputObjectSchema as FileCreateNestedOneWithoutAdminsInputObjectSchema } from './FileCreateNestedOneWithoutAdminsInput.schema'

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
  avatar: z.lazy(() => FileCreateNestedOneWithoutAdminsInputObjectSchema).optional()
}).strict();
export const AdminCreateWithoutUploadsInputObjectSchema: z.ZodType<Prisma.AdminCreateWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateWithoutUploadsInput>;
export const AdminCreateWithoutUploadsInputObjectZodSchema = makeSchema();
