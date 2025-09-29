import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { UserStaffCreateManyUserInputObjectSchema as StaffCreateManyUserInputObjectSchema } from './StaffCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StaffCreateManyUserInputObjectSchema), z.lazy(() => StaffCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StaffCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.StaffCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateManyUserInputEnvelope>;
export const StaffCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
