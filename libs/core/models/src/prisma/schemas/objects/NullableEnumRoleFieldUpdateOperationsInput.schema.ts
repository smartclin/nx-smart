import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  set: RoleSchema.optional()
}).strict();
export const NullableEnumRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumRoleFieldUpdateOperationsInput>;
export const NullableEnumRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
