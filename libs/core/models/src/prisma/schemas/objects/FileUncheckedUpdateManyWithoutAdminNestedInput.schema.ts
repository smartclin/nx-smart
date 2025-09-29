import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutAdminInputObjectSchema as FileCreateWithoutAdminInputObjectSchema } from './FileCreateWithoutAdminInput.schema';
import { FileUncheckedCreateWithoutAdminInputObjectSchema as FileUncheckedCreateWithoutAdminInputObjectSchema } from './FileUncheckedCreateWithoutAdminInput.schema';
import { FileCreateOrConnectWithoutAdminInputObjectSchema as FileCreateOrConnectWithoutAdminInputObjectSchema } from './FileCreateOrConnectWithoutAdminInput.schema';
import { FileUpsertWithWhereUniqueWithoutAdminInputObjectSchema as FileUpsertWithWhereUniqueWithoutAdminInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutAdminInput.schema';
import { AdminFileCreateManyAdminInputEnvelopeObjectSchema as FileCreateManyAdminInputEnvelopeObjectSchema } from './FileCreateManyAdminInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutAdminInputObjectSchema as FileUpdateWithWhereUniqueWithoutAdminInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutAdminInput.schema';
import { FileUpdateManyWithWhereWithoutAdminInputObjectSchema as FileUpdateManyWithWhereWithoutAdminInputObjectSchema } from './FileUpdateManyWithWhereWithoutAdminInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutAdminInputObjectSchema), z.lazy(() => FileCreateWithoutAdminInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutAdminInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutAdminInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutAdminInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutAdminInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyAdminInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutAdminInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutAdminInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutAdminInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutAdminInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedUpdateManyWithoutAdminNestedInputObjectSchema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutAdminNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedUpdateManyWithoutAdminNestedInput>;
export const FileUncheckedUpdateManyWithoutAdminNestedInputObjectZodSchema = makeSchema();
