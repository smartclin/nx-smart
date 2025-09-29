import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string()
}).strict();
export const TwoFactorUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedCreateWithoutUserInput>;
export const TwoFactorUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
