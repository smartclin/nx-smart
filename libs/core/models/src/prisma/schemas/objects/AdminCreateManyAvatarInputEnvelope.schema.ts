import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { AvatarAdminCreateManyAvatarInputObjectSchema as AdminCreateManyAvatarInputObjectSchema } from './AdminCreateManyAvatarInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AdminCreateManyAvatarInputObjectSchema), z.lazy(() => AdminCreateManyAvatarInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AdminCreateManyAvatarInputEnvelopeObjectSchema: z.ZodType<Prisma.AdminCreateManyAvatarInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateManyAvatarInputEnvelope>;
export const AdminCreateManyAvatarInputEnvelopeObjectZodSchema = makeSchema();
