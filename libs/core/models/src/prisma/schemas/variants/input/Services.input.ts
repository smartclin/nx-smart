import { z } from 'zod';

import { ServiceCategorySchema } from '../../enums/ServiceCategory.schema';
// prettier-ignore
export const ServicesInputSchema = z.object({
    id: z.number().int(),
    serviceName: z.string(),
    description: z.string(),
    price: z.number(),
    labtests: z.array(z.unknown()),
    bills: z.array(z.unknown()),
    category: ServiceCategorySchema.optional().nullable(),
    duration: z.number().int().optional().nullable(),
    isAvailable: z.boolean(),
    appointments: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServicesInputType = z.infer<typeof ServicesInputSchema>;
