import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminCreateWithoutAvatarInputObjectSchema as AdminCreateWithoutAvatarInputObjectSchema } from './AdminCreateWithoutAvatarInput.schema';
import { AdminUncheckedCreateWithoutAvatarInputObjectSchema as AdminUncheckedCreateWithoutAvatarInputObjectSchema } from './AdminUncheckedCreateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema)])
}).strict();
export const AdminCreateOrConnectWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateOrConnectWithoutAvatarInput>;
export const AdminCreateOrConnectWithoutAvatarInputObjectZodSchema = makeSchema();
