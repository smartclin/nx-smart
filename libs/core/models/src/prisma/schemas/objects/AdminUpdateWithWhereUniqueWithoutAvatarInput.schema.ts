import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutAvatarInputObjectSchema as AdminUpdateWithoutAvatarInputObjectSchema } from './AdminUpdateWithoutAvatarInput.schema';
import { AdminUncheckedUpdateWithoutAvatarInputObjectSchema as AdminUncheckedUpdateWithoutAvatarInputObjectSchema } from './AdminUncheckedUpdateWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateWithoutAvatarInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutAvatarInputObjectSchema)])
}).strict();
export const AdminUpdateWithWhereUniqueWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutAvatarInput>;
export const AdminUpdateWithWhereUniqueWithoutAvatarInputObjectZodSchema = makeSchema();
