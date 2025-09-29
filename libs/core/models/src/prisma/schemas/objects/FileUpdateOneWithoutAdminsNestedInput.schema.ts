import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutAdminsInputObjectSchema as FileCreateWithoutAdminsInputObjectSchema } from './FileCreateWithoutAdminsInput.schema';
import { FileUncheckedCreateWithoutAdminsInputObjectSchema as FileUncheckedCreateWithoutAdminsInputObjectSchema } from './FileUncheckedCreateWithoutAdminsInput.schema';
import { FileCreateOrConnectWithoutAdminsInputObjectSchema as FileCreateOrConnectWithoutAdminsInputObjectSchema } from './FileCreateOrConnectWithoutAdminsInput.schema';
import { FileUpsertWithoutAdminsInputObjectSchema as FileUpsertWithoutAdminsInputObjectSchema } from './FileUpsertWithoutAdminsInput.schema';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateToOneWithWhereWithoutAdminsInputObjectSchema as FileUpdateToOneWithWhereWithoutAdminsInputObjectSchema } from './FileUpdateToOneWithWhereWithoutAdminsInput.schema';
import { FileUpdateWithoutAdminsInputObjectSchema as FileUpdateWithoutAdminsInputObjectSchema } from './FileUpdateWithoutAdminsInput.schema';
import { FileUncheckedUpdateWithoutAdminsInputObjectSchema as FileUncheckedUpdateWithoutAdminsInputObjectSchema } from './FileUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutAdminsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => FileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FileUpdateToOneWithWhereWithoutAdminsInputObjectSchema), z.lazy(() => FileUpdateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutAdminsInputObjectSchema)]).optional()
}).strict();
export const FileUpdateOneWithoutAdminsNestedInputObjectSchema: z.ZodType<Prisma.FileUpdateOneWithoutAdminsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateOneWithoutAdminsNestedInput>;
export const FileUpdateOneWithoutAdminsNestedInputObjectZodSchema = makeSchema();
