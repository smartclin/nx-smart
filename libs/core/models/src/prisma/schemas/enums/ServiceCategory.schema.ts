import { z } from 'zod';

export const ServiceCategorySchema = z.enum(['CONSULTATION', 'LAB_TEST', 'VACCINATION', 'PROCEDURE', 'PHARMACY', 'DIAGNOSIS', 'OTHER'])

export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;