import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutUsersInputObjectSchema as FileCreateWithoutUsersInputObjectSchema } from './FileCreateWithoutUsersInput.schema';
import { FileUncheckedCreateWithoutUsersInputObjectSchema as FileUncheckedCreateWithoutUsersInputObjectSchema } from './FileUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutUsersInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutUsersInput>;
export const FileCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
