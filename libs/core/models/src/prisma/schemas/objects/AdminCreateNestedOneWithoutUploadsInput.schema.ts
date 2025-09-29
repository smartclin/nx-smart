import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AdminCreateWithoutUploadsInputObjectSchema as AdminCreateWithoutUploadsInputObjectSchema } from './AdminCreateWithoutUploadsInput.schema';
import { AdminUncheckedCreateWithoutUploadsInputObjectSchema as AdminUncheckedCreateWithoutUploadsInputObjectSchema } from './AdminUncheckedCreateWithoutUploadsInput.schema';
import { AdminCreateOrConnectWithoutUploadsInputObjectSchema as AdminCreateOrConnectWithoutUploadsInputObjectSchema } from './AdminCreateOrConnectWithoutUploadsInput.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutUploadsInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutUploadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUploadsInputObjectSchema).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputObjectSchema).optional()
}).strict();
export const AdminCreateNestedOneWithoutUploadsInputObjectSchema: z.ZodType<Prisma.AdminCreateNestedOneWithoutUploadsInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateNestedOneWithoutUploadsInput>;
export const AdminCreateNestedOneWithoutUploadsInputObjectZodSchema = makeSchema();
