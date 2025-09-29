import { z } from 'zod';
export const ServicesDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  labtests: z.array(z.unknown()),
  bills: z.array(z.unknown()),
  category: z.unknown().optional(),
  duration: z.number().int().optional(),
  isAvailable: z.boolean(),
  appointments: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));