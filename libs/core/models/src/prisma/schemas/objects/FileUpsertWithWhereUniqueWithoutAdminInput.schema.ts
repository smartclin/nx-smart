import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutAdminInputObjectSchema as FileUpdateWithoutAdminInputObjectSchema } from './FileUpdateWithoutAdminInput.schema';
import { FileUncheckedUpdateWithoutAdminInputObjectSchema as FileUncheckedUpdateWithoutAdminInputObjectSchema } from './FileUncheckedUpdateWithoutAdminInput.schema';
import { FileCreateWithoutAdminInputObjectSchema as FileCreateWithoutAdminInputObjectSchema } from './FileCreateWithoutAdminInput.schema';
import { FileUncheckedCreateWithoutAdminInputObjectSchema as FileUncheckedCreateWithoutAdminInputObjectSchema } from './FileUncheckedCreateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutAdminInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutAdminInput>;
export const FileUpsertWithWhereUniqueWithoutAdminInputObjectZodSchema = makeSchema();
