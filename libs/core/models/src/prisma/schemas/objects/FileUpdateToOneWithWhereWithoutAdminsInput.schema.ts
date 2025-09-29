import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereInputObjectSchema as FileWhereInputObjectSchema } from './FileWhereInput.schema';
import { FileUpdateWithoutAdminsInputObjectSchema as FileUpdateWithoutAdminsInputObjectSchema } from './FileUpdateWithoutAdminsInput.schema';
import { FileUncheckedUpdateWithoutAdminsInputObjectSchema as FileUncheckedUpdateWithoutAdminsInputObjectSchema } from './FileUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FileUpdateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedUpdateWithoutAdminsInputObjectSchema)])
}).strict();
export const FileUpdateToOneWithWhereWithoutAdminsInputObjectSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutAdminsInput>;
export const FileUpdateToOneWithWhereWithoutAdminsInputObjectZodSchema = makeSchema();
