import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminCreateWithoutUploadsInputObjectSchema as AdminCreateWithoutUploadsInputObjectSchema } from './AdminCreateWithoutUploadsInput.schema';
import { AdminUncheckedCreateWithoutUploadsInputObjectSchema as AdminUncheckedCreateWithoutUploadsInputObjectSchema } from './AdminUncheckedCreateWithoutUploadsInput.schema';
import { AdminCreateOrConnectWithoutUploadsInputObjectSchema as AdminCreateOrConnectWithoutUploadsInputObjectSchema } from './AdminCreateOrConnectWithoutUploadsInput.schema';
import { AdminUpsertWithoutUploadsInputObjectSchema as AdminUpsertWithoutUploadsInputObjectSchema } from './AdminUpsertWithoutUploadsInput.schema';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateToOneWithWhereWithoutUploadsInputObjectSchema as AdminUpdateToOneWithWhereWithoutUploadsInputObjectSchema } from './AdminUpdateToOneWithWhereWithoutUploadsInput.schema';
import { AdminUpdateWithoutUploadsInputObjectSchema as AdminUpdateWithoutUploadsInputObjectSchema } from './AdminUpdateWithoutUploadsInput.schema';
import { AdminUncheckedUpdateWithoutUploadsInputObjectSchema as AdminUncheckedUpdateWithoutUploadsInputObjectSchema } from './AdminUncheckedUpdateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutUploadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUploadsInputObjectSchema).optional(),
  upsert: z.lazy(() => AdminUpsertWithoutUploadsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AdminWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AdminWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AdminUpdateToOneWithWhereWithoutUploadsInputObjectSchema), z.lazy(() => AdminUpdateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutUploadsInputObjectSchema)]).optional()
}).strict();
export const AdminUpdateOneWithoutUploadsNestedInputObjectSchema: z.ZodType<Prisma.AdminUpdateOneWithoutUploadsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateOneWithoutUploadsNestedInput>;
export const AdminUpdateOneWithoutUploadsNestedInputObjectZodSchema = makeSchema();
