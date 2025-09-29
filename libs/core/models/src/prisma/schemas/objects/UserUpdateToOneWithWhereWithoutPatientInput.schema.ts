import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPatientInputObjectSchema as UserUpdateWithoutPatientInputObjectSchema } from './UserUpdateWithoutPatientInput.schema';
import { UserUncheckedUpdateWithoutPatientInputObjectSchema as UserUncheckedUpdateWithoutPatientInputObjectSchema } from './UserUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPatientInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPatientInput>;
export const UserUpdateToOneWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
