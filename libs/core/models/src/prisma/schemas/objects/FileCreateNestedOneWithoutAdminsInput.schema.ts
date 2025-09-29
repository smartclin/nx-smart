import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutAdminsInputObjectSchema as FileCreateWithoutAdminsInputObjectSchema } from './FileCreateWithoutAdminsInput.schema';
import { FileUncheckedCreateWithoutAdminsInputObjectSchema as FileUncheckedCreateWithoutAdminsInputObjectSchema } from './FileUncheckedCreateWithoutAdminsInput.schema';
import { FileCreateOrConnectWithoutAdminsInputObjectSchema as FileCreateOrConnectWithoutAdminsInputObjectSchema } from './FileCreateOrConnectWithoutAdminsInput.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutAdminsInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputObjectSchema).optional()
}).strict();
export const FileCreateNestedOneWithoutAdminsInputObjectSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedOneWithoutAdminsInput>;
export const FileCreateNestedOneWithoutAdminsInputObjectZodSchema = makeSchema();
