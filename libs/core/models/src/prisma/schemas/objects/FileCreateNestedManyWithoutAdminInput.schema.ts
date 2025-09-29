import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FileCreateWithoutAdminInputObjectSchema as FileCreateWithoutAdminInputObjectSchema } from './FileCreateWithoutAdminInput.schema';
import { FileUncheckedCreateWithoutAdminInputObjectSchema as FileUncheckedCreateWithoutAdminInputObjectSchema } from './FileUncheckedCreateWithoutAdminInput.schema';
import { FileCreateOrConnectWithoutAdminInputObjectSchema as FileCreateOrConnectWithoutAdminInputObjectSchema } from './FileCreateOrConnectWithoutAdminInput.schema';
import { AdminFileCreateManyAdminInputEnvelopeObjectSchema as FileCreateManyAdminInputEnvelopeObjectSchema } from './FileCreateManyAdminInputEnvelope.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './FileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileCreateWithoutAdminInputObjectSchema), z.lazy(() => FileCreateWithoutAdminInputObjectSchema).array(), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema), z.lazy(() => FileUncheckedCreateWithoutAdminInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileCreateOrConnectWithoutAdminInputObjectSchema), z.lazy(() => FileCreateOrConnectWithoutAdminInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileCreateManyAdminInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileWhereUniqueInputObjectSchema), z.lazy(() => FileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileCreateNestedManyWithoutAdminInputObjectSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutAdminInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateNestedManyWithoutAdminInput>;
export const FileCreateNestedManyWithoutAdminInputObjectZodSchema = makeSchema();
