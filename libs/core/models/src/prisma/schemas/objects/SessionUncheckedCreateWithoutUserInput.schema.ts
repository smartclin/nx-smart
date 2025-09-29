import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  impersonatedBy: z.string().optional().nullable()
}).strict();
export const SessionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput>;
export const SessionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
