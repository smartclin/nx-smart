import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDoctorInputObjectSchema as UserUpdateWithoutDoctorInputObjectSchema } from './UserUpdateWithoutDoctorInput.schema';
import { UserUncheckedUpdateWithoutDoctorInputObjectSchema as UserUncheckedUpdateWithoutDoctorInputObjectSchema } from './UserUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDoctorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDoctorInput>;
export const UserUpdateToOneWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
