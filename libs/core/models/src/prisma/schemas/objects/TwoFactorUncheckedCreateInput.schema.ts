import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  secret: z.string(),
  backupCodes: z.string(),
  userId: z.string()
}).strict();
export const TwoFactorUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedCreateInput>;
export const TwoFactorUncheckedCreateInputObjectZodSchema = makeSchema();
