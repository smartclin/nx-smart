import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileUpdateWithoutUsersInputObjectSchema as FileUpdateWithoutUsersInputObjectSchema } from './FileUpdateWithoutUsersInput.schema';
import { FileUncheckedUpdateWithoutUsersInputObjectSchema as FileUncheckedUpdateWithoutUsersInputObjectSchema } from './FileUncheckedUpdateWithoutUsersInput.schema';
import { FileCreateWithoutUsersInputObjectSchema as FileCreateWithoutUsersInputObjectSchema } from './FileCreateWithoutUsersInput.schema';
import { FileUncheckedCreateWithoutUsersInputObjectSchema as FileUncheckedCreateWithoutUsersInputObjectSchema } from './FileUncheckedCreateWithoutUsersInput.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FileUpdateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => FileWhereInputObjectSchema).optional()
}).strict();
export const FileUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.FileUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithoutUsersInput>;
export const FileUpsertWithoutUsersInputObjectZodSchema = makeSchema();
