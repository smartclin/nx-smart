import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileUpdateWithoutAdminInputObjectSchema as FileUpdateWithoutAdminInputObjectSchema } from './FileUpdateWithoutAdminInput.schema';
import { FileUncheckedUpdateWithoutAdminInputObjectSchema as FileUncheckedUpdateWithoutAdminInputObjectSchema } from './FileUncheckedUpdateWithoutAdminInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileUpdateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutAdminInputObjectSchema)])
}).strict();
export const FileUpdateWithWhereUniqueWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutAdminInput>;
export const FileUpdateWithWhereUniqueWithoutAdminInputObjectZodSchema = makeSchema();
