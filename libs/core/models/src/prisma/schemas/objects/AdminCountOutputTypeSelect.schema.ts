import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  uploads: z.boolean().optional()
}).strict();
export const AdminCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AdminCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AdminCountOutputTypeSelect>;
export const AdminCountOutputTypeSelectObjectZodSchema = makeSchema();
