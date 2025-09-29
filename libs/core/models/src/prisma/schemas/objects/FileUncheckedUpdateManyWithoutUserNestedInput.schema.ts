import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutUserInputObjectSchema as FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema';
import { FileUncheckedCreateWithoutUserInputObjectSchema as FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema';
import { FileCreateOrConnectWithoutUserInputObjectSchema as FileCreateOrConnectWithoutUserInputObjectSchema } from './FileCreateOrConnectWithoutUserInput.schema';
import { FileUpsertWithWhereUniqueWithoutUserInputObjectSchema as FileUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FileUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserFileCreateManyUserInputEnvelopeObjectSchema as FileCreateManyUserInputEnvelopeObjectSchema } from './FileCreateManyUserInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithWhereUniqueWithoutUserInputObjectSchema as FileUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FileUpdateWithWhereUniqueWithoutUserInput.schema';
import { FileUpdateManyWithWhereWithoutUserInputObjectSchema as FileUpdateManyWithWhereWithoutUserInputObjectSchema } from './FileUpdateManyWithWhereWithoutUserInput.schema';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUserInputObjectSchema), z.lazy(() => FileCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FileUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FileUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => FileUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileScalarWhereInputObjectSchema), z.lazy(() => FileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedUpdateManyWithoutUserNestedInput>;
export const FileUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
