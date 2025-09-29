import { z } from 'zod';

import { ServiceCategorySchema } from '../../enums/ServiceCategory.schema';
// prettier-ignore
export const ServicesResultSchema = z.object({
    id: z.number().int(),
    serviceName: z.string(),
    description: z.string(),
    price: z.number(),
    labtests: z.array(z.unknown()),
    bills: z.array(z.unknown()),
    category: ServiceCategorySchema.nullable(),
    duration: z.number().int().nullable(),
    isAvailable: z.boolean(),
    appointments: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServicesResultType = z.infer<typeof ServicesResultSchema>;
