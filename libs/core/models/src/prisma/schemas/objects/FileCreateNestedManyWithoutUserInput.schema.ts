import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutUserInputObjectSchema as FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema';
import { FileUncheckedCreateWithoutUserInputObjectSchema as FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema';
import { FileCreateOrConnectWithoutUserInputObjectSchema as FileCreateOrConnectWithoutUserInputObjectSchema } from './FileCreateOrConnectWithoutUserInput.schema';
import { UserFileCreateManyUserInputEnvelopeObjectSchema as FileCreateManyUserInputEnvelopeObjectSchema } from './FileCreateManyUserInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutUserInputObjectSchema), z.lazy(() => FileCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedManyWithoutUserInput>;
export const FileCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
