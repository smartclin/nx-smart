import { z } from 'zod';

// prettier-ignore
export const LabTestInputSchema = z.object({
    id: z.number().int(),
    recordId: z.number().int(),
    testDate: z.date(),
    result: z.string(),
    status: z.string(),
    notes: z.string().optional().nullable(),
    serviceId: z.number().int().optional().nullable(),
    services: z.unknown().optional().nullable(),
    medicalRecord: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type LabTestInputType = z.infer<typeof LabTestInputSchema>;
