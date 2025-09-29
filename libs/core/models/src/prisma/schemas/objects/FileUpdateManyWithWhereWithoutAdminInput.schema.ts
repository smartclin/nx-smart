import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileScalarWhereInputObjectSchema as FileScalarWhereInputObjectSchema } from './FileScalarWhereInput.schema';
import { FileUpdateManyMutationInputObjectSchema as FileUpdateManyMutationInputObjectSchema } from './FileUpdateManyMutationInput.schema';
import { FileUncheckedUpdateManyWithoutAdminInputObjectSchema as FileUncheckedUpdateManyWithoutAdminInputObjectSchema } from './FileUncheckedUpdateManyWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateManyMutationInputObjectSchema), z.lazy(() => FileUncheckedUpdateManyWithoutAdminInputObjectSchema)])
}).strict();
export const FileUpdateManyWithWhereWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateManyWithWhereWithoutAdminInput>;
export const FileUpdateManyWithWhereWithoutAdminInputObjectZodSchema = makeSchema();
