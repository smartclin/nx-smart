import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { AdminArgsObjectSchema as AdminArgsObjectSchema } from './AdminArgs.schema';
import { AdminFindManySchema as AdminFindManySchema } from '../findManyAdmin.schema';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { FileCountOutputTypeArgsObjectSchema as FileCountOutputTypeArgsObjectSchema } from './FileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  size: z.boolean().optional(),
  type: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  admin: z.union([z.boolean(), z.lazy(() => AdminArgsObjectSchema)]).optional(),
  adminId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  admins: z.union([z.boolean(), z.lazy(() => AdminFindManySchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FileSelectObjectSchema: z.ZodType<Prisma.FileSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileSelect>;
export const FileSelectObjectZodSchema = makeSchema();
