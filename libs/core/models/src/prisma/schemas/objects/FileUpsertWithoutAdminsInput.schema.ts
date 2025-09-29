import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileUpdateWithoutAdminsInputObjectSchema as FileUpdateWithoutAdminsInputObjectSchema } from './FileUpdateWithoutAdminsInput.schema';
import { FileUncheckedUpdateWithoutAdminsInputObjectSchema as FileUncheckedUpdateWithoutAdminsInputObjectSchema } from './FileUncheckedUpdateWithoutAdminsInput.schema';
import { FileCreateWithoutAdminsInputObjectSchema as FileCreateWithoutAdminsInputObjectSchema } from './FileCreateWithoutAdminsInput.schema';
import { FileUncheckedCreateWithoutAdminsInputObjectSchema as FileUncheckedCreateWithoutAdminsInputObjectSchema } from './FileUncheckedCreateWithoutAdminsInput.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FileUpdateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutAdminsInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminsInputObjectSchema)]),
  where: z.lazy(() => FileWhereInputObjectSchema).optional()
}).strict();
export const FileUpsertWithoutAdminsInputObjectSchema: z.ZodType<Prisma.FileUpsertWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithoutAdminsInput>;
export const FileUpsertWithoutAdminsInputObjectZodSchema = makeSchema();
