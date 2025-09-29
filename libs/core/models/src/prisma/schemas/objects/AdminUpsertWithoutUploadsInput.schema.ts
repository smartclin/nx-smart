import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminUpdateWithoutUploadsInputObjectSchema as AdminUpdateWithoutUploadsInputObjectSchema } from './AdminUpdateWithoutUploadsInput.schema';
import { AdminUncheckedUpdateWithoutUploadsInputObjectSchema as AdminUncheckedUpdateWithoutUploadsInputObjectSchema } from './AdminUncheckedUpdateWithoutUploadsInput.schema';
import { AdminCreateWithoutUploadsInputObjectSchema as AdminCreateWithoutUploadsInputObjectSchema } from './AdminCreateWithoutUploadsInput.schema';
import { AdminUncheckedCreateWithoutUploadsInputObjectSchema as AdminUncheckedCreateWithoutUploadsInputObjectSchema } from './AdminUncheckedCreateWithoutUploadsInput.schema';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AdminUpdateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutUploadsInputObjectSchema)]),
  create: z.union([z.lazy(() => AdminCreateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutUploadsInputObjectSchema)]),
  where: z.lazy(() => AdminWhereInputObjectSchema).optional()
}).strict();
export const AdminUpsertWithoutUploadsInputObjectSchema: z.ZodType<Prisma.AdminUpsertWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpsertWithoutUploadsInput>;
export const AdminUpsertWithoutUploadsInputObjectZodSchema = makeSchema();
