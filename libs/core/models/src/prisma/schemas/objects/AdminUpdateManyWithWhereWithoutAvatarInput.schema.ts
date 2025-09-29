import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema';
import { AdminUpdateManyMutationInputObjectSchema as AdminUpdateManyMutationInputObjectSchema } from './AdminUpdateManyMutationInput.schema';
import { AdminUncheckedUpdateManyWithoutAvatarInputObjectSchema as AdminUncheckedUpdateManyWithoutAvatarInputObjectSchema } from './AdminUncheckedUpdateManyWithoutAvatarInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateManyMutationInputObjectSchema), z.lazy(() => AdminUncheckedUpdateManyWithoutAvatarInputObjectSchema)])
}).strict();
export const AdminUpdateManyWithWhereWithoutAvatarInputObjectSchema: z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutAvatarInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutAvatarInput>;
export const AdminUpdateManyWithWhereWithoutAvatarInputObjectZodSchema = makeSchema();
