import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutAvatarInputObjectSchema as AdminUpdateWithoutAvatarInputObjectSchema } from './AdminUpdateWithoutAvatarInput.schema';
import { AdminUncheckedUpdateWithoutAvatarInputObjectSchema as AdminUncheckedUpdateWithoutAvatarInputObjectSchema } from './AdminUncheckedUpdateWithoutAvatarInput.schema';
import { AdminCreateWithoutAvatarInputObjectSchema as AdminCreateWithoutAvatarInputObjectSchema } from './AdminCreateWithoutAvatarInput.schema';
import { AdminUncheckedCreateWithoutAvatarInputObjectSchema as AdminUncheckedCreateWithoutAvatarInputObjectSchema } from './AdminUncheckedCreateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AdminUpdateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutAvatarInputObjectSchema)]),
  create: z.union([z.lazy(() => AdminCreateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutAvatarInputObjectSchema)])
}).strict();
export const AdminUpsertWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutAvatarInput>;
export const AdminUpsertWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
