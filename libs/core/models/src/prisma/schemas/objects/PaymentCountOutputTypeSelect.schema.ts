import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  bills: z.boolean().optional()
}).strict();
export const PaymentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PaymentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCountOutputTypeSelect>;
export const PaymentCountOutputTypeSelectObjectZodSchema = makeSchema();
