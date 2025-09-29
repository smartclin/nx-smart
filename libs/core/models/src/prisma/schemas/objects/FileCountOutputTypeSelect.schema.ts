import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  admins: z.boolean().optional(),
  users: z.boolean().optional()
}).strict();
export const FileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileCountOutputTypeSelect>;
export const FileCountOutputTypeSelectObjectZodSchema = makeSchema();
