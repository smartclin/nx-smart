import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileArgsObjectSchema as FileArgsObjectSchema } from './FileArgs.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { AdminCountOutputTypeArgsObjectSchema as AdminCountOutputTypeArgsObjectSchema } from './AdminCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  avatar: z.union([z.boolean(), z.lazy(() => FileArgsObjectSchema)]).optional(),
  uploads: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AdminCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AdminIncludeObjectSchema: z.ZodType<Prisma.AdminInclude> = makeSchema() as unknown as z.ZodType<Prisma.AdminInclude>;
export const AdminIncludeObjectZodSchema = makeSchema();
