import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema';
import { FileCreateWithoutAdminsInputObjectSchema as FileCreateWithoutAdminsInputObjectSchema } from './FileCreateWithoutAdminsInput.schema';
import { FileUncheckedCreateWithoutAdminsInputObjectSchema as FileUncheckedCreateWithoutAdminsInputObjectSchema } from './FileUncheckedCreateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileCreateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminsInputObjectSchema)])
}).strict();
export const FileCreateOrConnectWithoutAdminsInputObjectSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateOrConnectWithoutAdminsInput>;
export const FileCreateOrConnectWithoutAdminsInputObjectZodSchema = makeSchema();
