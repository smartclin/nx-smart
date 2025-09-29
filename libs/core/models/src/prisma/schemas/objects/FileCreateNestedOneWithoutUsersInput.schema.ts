import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutUsersInputObjectSchema as FileCreateWithoutUsersInputObjectSchema } from './FileCreateWithoutUsersInput.schema';
import { FileUncheckedCreateWithoutUsersInputObjectSchema as FileUncheckedCreateWithoutUsersInputObjectSchema } from './FileUncheckedCreateWithoutUsersInput.schema';
import { FileCreateOrConnectWithoutUsersInputObjectSchema as FileCreateOrConnectWithoutUsersInputObjectSchema } from './FileCreateOrConnectWithoutUsersInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputObjectSchema).optional()
}).strict();
export const FileCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedOneWithoutUsersInput>;
export const FileCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
