import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  role: z.literal(true).optional(),
  name: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  birthDate: z.literal(true).optional(),
  avatarId: z.literal(true).optional(),
  isRoot: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AdminMinAggregateInputObjectSchema: z.ZodType<Prisma.AdminMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AdminMinAggregateInputType>;
export const AdminMinAggregateInputObjectZodSchema = makeSchema();
