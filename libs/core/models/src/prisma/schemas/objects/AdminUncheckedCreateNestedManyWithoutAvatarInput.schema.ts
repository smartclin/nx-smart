import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminCreateWithoutAvatarInputObjectSchema as AdminCreateWithoutAvatarInputObjectSchema } from './AdminCreateWithoutAvatarInput.schema';
import { AdminUncheckedCreateWithoutAvatarInputObjectSchema as AdminUncheckedCreateWithoutAvatarInputObjectSchema } from './AdminUncheckedCreateWithoutAvatarInput.schema';
import { AdminCreateOrConnectWithoutAvatarInputObjectSchema as AdminCreateOrConnectWithoutAvatarInputObjectSchema } from './AdminCreateOrConnectWithoutAvatarInput.schema';
import { AvatarAdminCreateManyAvatarInputEnvelopeObjectSchema as AdminCreateManyAvatarInputEnvelopeObjectSchema } from './AdminCreateManyAvatarInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutAvatarInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutAvatarInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyAvatarInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AdminUncheckedCreateNestedManyWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminUncheckedCreateNestedManyWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUncheckedCreateNestedManyWithoutAvatarInput>;
export const AdminUncheckedCreateNestedManyWithoutAvatarInputObjectZodSchema = makeSchema();
