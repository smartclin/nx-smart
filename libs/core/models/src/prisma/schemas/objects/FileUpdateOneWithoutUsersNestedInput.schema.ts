import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutUsersInputObjectSchema as FileCreateWithoutUsersInputObjectSchema } from './FileCreateWithoutUsersInput.schema';
import { FileUncheckedCreateWithoutUsersInputObjectSchema as FileUncheckedCreateWithoutUsersInputObjectSchema } from './FileUncheckedCreateWithoutUsersInput.schema';
import { FileCreateOrConnectWithoutUsersInputObjectSchema as FileCreateOrConnectWithoutUsersInputObjectSchema } from './FileCreateOrConnectWithoutUsersInput.schema';
import { FileUpsertWithoutUsersInputObjectSchema as FileUpsertWithoutUsersInputObjectSchema } from './FileUpsertWithoutUsersInput.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateToOneWithWhereWithoutUsersInputObjectSchema as FileUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './FileUpdateToOneWithWhereWithoutUsersInput.schema';
import { FileUpdateWithoutUsersInputObjectSchema as FileUpdateWithoutUsersInputObjectSchema } from './FileUpdateWithoutUsersInput.schema';
import { FileUncheckedUpdateWithoutUsersInputObjectSchema as FileUncheckedUpdateWithoutUsersInputObjectSchema } from './FileUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FileUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => FileUpdateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const FileUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateOneWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateOneWithoutUsersNestedInput>;
export const FileUpdateOneWithoutUsersNestedInputObjectZodSchema = makeSchema();
