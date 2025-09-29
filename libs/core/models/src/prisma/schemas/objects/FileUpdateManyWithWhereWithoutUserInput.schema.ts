import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutUserInputObjectSchema as FileUncheckedUpdateManyWithoutUserInputObjectSchema } from './FileUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUserInput>;
export const FileUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
