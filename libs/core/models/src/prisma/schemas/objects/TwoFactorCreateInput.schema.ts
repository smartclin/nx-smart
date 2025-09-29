import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserCreateNestedOneWithoutTwofactorsInputObjectSchema as UserCreateNestedOneWithoutTwofactorsInputObjectSchema } from './UserCreateNestedOneWithoutTwofactorsInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTwofactorsInputObjectSchema)
}).strict();
export const TwoFactorCreateInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateInput>;
export const TwoFactorCreateInputObjectZodSchema = makeSchema();
