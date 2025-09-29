import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema';
import { AdminUpdateWithoutUploadsInputObjectSchema as AdminUpdateWithoutUploadsInputObjectSchema } from './AdminUpdateWithoutUploadsInput.schema';
import { AdminUncheckedUpdateWithoutUploadsInputObjectSchema as AdminUncheckedUpdateWithoutUploadsInputObjectSchema } from './AdminUncheckedUpdateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AdminUpdateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutUploadsInputObjectSchema)])
}).strict();
export const AdminUpdateToOneWithWhereWithoutUploadsInputObjectSchema: z.ZodType<Prisma.AdminUpdateToOneWithWhereWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateToOneWithWhereWithoutUploadsInput>;
export const AdminUpdateToOneWithWhereWithoutUploadsInputObjectZodSchema = makeSchema();
