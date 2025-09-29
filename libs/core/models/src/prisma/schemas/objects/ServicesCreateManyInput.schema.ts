import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  category: ServiceCategorySchema.optional().nullable(),
  duration: z.number().int().optional().nullable(),
  isAvailable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ServicesCreateManyInputObjectSchema: z.ZodType<Prisma.ServicesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateManyInput>;
export const ServicesCreateManyInputObjectZodSchema = makeSchema();
