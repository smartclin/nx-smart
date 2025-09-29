import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileArgsObjectSchema as FileArgsObjectSchema } from './FileArgs.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { AdminCountOutputTypeArgsObjectSchema as AdminCountOutputTypeArgsObjectSchema } from './AdminCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  birthDate: z.boolean().optional(),
  avatarId: z.boolean().optional(),
  avatar: z.union([z.boolean(), z.lazy(() => FileArgsObjectSchema)]).optional(),
  isRoot: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  uploads: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AdminCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AdminSelectObjectSchema: z.ZodType<Prisma.AdminSelect> = makeSchema() as unknown as z.ZodType<Prisma.AdminSelect>;
export const AdminSelectObjectZodSchema = makeSchema();
