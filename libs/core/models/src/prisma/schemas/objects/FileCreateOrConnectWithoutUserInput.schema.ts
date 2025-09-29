import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutUserInputObjectSchema as FileCreateWithoutUserInputObjectSchema } from './FileCreateWithoutUserInput.schema';
import { FileUncheckedCreateWithoutUserInputObjectSchema as FileUncheckedCreateWithoutUserInputObjectSchema } from './FileUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutUserInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutUserInput>;
export const FileCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
