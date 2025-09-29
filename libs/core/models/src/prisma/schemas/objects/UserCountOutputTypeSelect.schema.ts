import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  sessions: z.boolean().optional(),
  accounts: z.boolean().optional(),
  Notification: z.boolean().optional(),
  Staff: z.boolean().optional(),
  Doctor: z.boolean().optional(),
  Patient: z.boolean().optional(),
  twofactors: z.boolean().optional(),
  uploads: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
