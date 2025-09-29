import { z } from 'zod';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';

export const ServicesSchema = z.object({
  id: z.number().int(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.nullish(),
  duration: z.number().int().nullish(),
  isAvailable: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ServicesType = z.infer<typeof ServicesSchema>;
