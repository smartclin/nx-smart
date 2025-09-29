import { z } from 'zod';

// prettier-ignore
export const LabTestModelSchema = z.object({
    id: z.number().int(),
    recordId: z.number().int(),
    testDate: z.date(),
    result: z.string(),
    status: z.string(),
    notes: z.string().nullable(),
    serviceId: z.number().int().nullable(),
    services: z.unknown().nullable(),
    medicalRecord: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type LabTestModelType = z.infer<typeof LabTestModelSchema>;
