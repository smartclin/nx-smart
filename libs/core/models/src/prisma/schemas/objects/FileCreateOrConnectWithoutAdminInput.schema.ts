import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutAdminInputObjectSchema as FileCreateWithoutAdminInputObjectSchema } from './FileCreateWithoutAdminInput.schema';
import { FileUncheckedCreateWithoutAdminInputObjectSchema as FileUncheckedCreateWithoutAdminInputObjectSchema } from './FileUncheckedCreateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutAdminInput>;
export const FileCreateOrConnectWithoutAdminInputObjectZodSchema = makeSchema();
