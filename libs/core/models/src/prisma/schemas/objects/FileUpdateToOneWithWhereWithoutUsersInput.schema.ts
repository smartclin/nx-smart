import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileUpdateWithoutUsersInputObjectSchema as FileUpdateWithoutUsersInputObjectSchema } from './FileUpdateWithoutUsersInput.schema';
import { FileUncheckedUpdateWithoutUsersInputObjectSchema as FileUncheckedUpdateWithoutUsersInputObjectSchema } from './FileUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FileUpdateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const FileUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutUsersInput>;
export const FileUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
