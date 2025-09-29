import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();
export const TwoFactorCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateWithoutUserInput>;
export const TwoFactorCreateWithoutUserInputObjectZodSchema = makeSchema();
