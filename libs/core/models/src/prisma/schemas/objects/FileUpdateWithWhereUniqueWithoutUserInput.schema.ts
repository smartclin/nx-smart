import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutUserInputObjectSchema as FileUpdateWithoutUserInputObjectSchema } from './FileUpdateWithoutUserInput.schema';
import { FileUncheckedUpdateWithoutUserInputObjectSchema as FileUncheckedUpdateWithoutUserInputObjectSchema } from './FileUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutUserInput>;
export const FileUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
