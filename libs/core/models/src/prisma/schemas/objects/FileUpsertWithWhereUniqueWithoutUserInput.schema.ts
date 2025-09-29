import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutUserInputObjectSchema as FileUpdateWithoutUserInputObjectSchema } from './FileUpdateWithoutUserInput.schema';
import { FileUncheckedUpdateWithoutUserInputObjectSchema as FileUncheckedUpdateWithoutUserInputObjectSchema } from './FileUncheckedUpdateWithoutUserInput.schema';
import { FileCreateWithoutUserInputObjectSchema as FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema';
import { FileUncheckedCreateWithoutUserInputObjectSchema as FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileUpdateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => FileCreateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FileUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutUserInput>;
export const FileUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
