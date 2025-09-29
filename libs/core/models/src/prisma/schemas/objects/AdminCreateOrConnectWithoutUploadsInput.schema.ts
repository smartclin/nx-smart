import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminCreateWithoutUploadsInputObjectSchema as AdminCreateWithoutUploadsInputObjectSchema } from './AdminCreateWithoutUploadsInput.schema';
import { AdminUncheckedCreateWithoutUploadsInputObjectSchema as AdminUncheckedCreateWithoutUploadsInputObjectSchema } from './AdminUncheckedCreateWithoutUploadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AdminCreateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutUploadsInputObjectSchema)])
}).strict();
export const AdminCreateOrConnectWithoutUploadsInputObjectSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateOrConnectWithoutUploadsInput>;
export const AdminCreateOrConnectWithoutUploadsInputObjectZodSchema = makeSchema();
