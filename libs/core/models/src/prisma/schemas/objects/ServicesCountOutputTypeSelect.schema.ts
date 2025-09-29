import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  labtests: z.boolean().optional(),
  bills: z.boolean().optional(),
  appointments: z.boolean().optional()
}).strict();
export const ServicesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServicesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCountOutputTypeSelect>;
export const ServicesCountOutputTypeSelectObjectZodSchema = makeSchema();
