import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AvatarUserCreateManyAvatarInputObjectSchema as UserCreateManyAvatarInputObjectSchema } from './UserCreateManyAvatarInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyAvatarInputObjectSchema), z.lazy(() => UserCreateManyAvatarInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyAvatarInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyAvatarInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyAvatarInputEnvelope>;
export const UserCreateManyAvatarInputEnvelopeObjectZodSchema = makeSchema();
