import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWorkingDaysCreateManyDoctorInputObjectSchema as WorkingDaysCreateManyDoctorInputObjectSchema } from './WorkingDaysCreateManyDoctorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkingDaysCreateManyDoctorInputObjectSchema), z.lazy(() => WorkingDaysCreateManyDoctorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkingDaysCreateManyDoctorInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkingDaysCreateManyDoctorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysCreateManyDoctorInputEnvelope>;
export const WorkingDaysCreateManyDoctorInputEnvelopeObjectZodSchema = makeSchema();
