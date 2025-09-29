import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminCreateWithoutAvatarInputObjectSchema as AdminCreateWithoutAvatarInputObjectSchema } from './AdminCreateWithoutAvatarInput.schema';
import { AdminUncheckedCreateWithoutAvatarInputObjectSchema as AdminUncheckedCreateWithoutAvatarInputObjectSchema } from './AdminUncheckedCreateWithoutAvatarInput.schema';
import { AdminCreateOrConnectWithoutAvatarInputObjectSchema as AdminCreateOrConnectWithoutAvatarInputObjectSchema } from './AdminCreateOrConnectWithoutAvatarInput.schema';
import { AdminUpsertWithWhereUniqueWithoutAvatarInputObjectSchema as AdminUpsertWithWhereUniqueWithoutAvatarInputObjectSchema } from './AdminUpsertWithWhereUniqueWithoutAvatarInput.schema';
import { AvatarAdminCreateManyAvatarInputEnvelopeObjectSchema as AdminCreateManyAvatarInputEnvelopeObjectSchema } from './AdminCreateManyAvatarInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithWhereUniqueWithoutAvatarInputObjectSchema as AdminUpdateWithWhereUniqueWithoutAvatarInputObjectSchema } from './AdminUpdateWithWhereUniqueWithoutAvatarInput.schema';
import { AdminUpdateManyWithWhereWithoutAvatarInputObjectSchema as AdminUpdateManyWithWhereWithoutAvatarInputObjectSchema } from './AdminUpdateManyWithWhereWithoutAvatarInput.schema';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutAvatarInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AdminUpsertWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => AdminUpsertWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyAvatarInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AdminUpdateWithWhereUniqueWithoutAvatarInputObjectSchema), z.lazy(() => AdminUpdateWithWhereUniqueWithoutAvatarInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AdminUpdateManyWithWhereWithoutAvatarInputObjectSchema), z.lazy(() => AdminUpdateManyWithWhereWithoutAvatarInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AdminScalarWhereInputObjectSchema), z.lazy(() => AdminScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AdminUpdateManyWithoutAvatarNestedInputObjectSchema: z.ZodType<Prisma.AdminUpdateManyWithoutAvatarNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateManyWithoutAvatarNestedInput>;
export const AdminUpdateManyWithoutAvatarNestedInputObjectZodSchema = makeSchema();
