import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { FeedingLogScalarWhereInputObjectSchema as FeedingLogScalarWhereInputObjectSchema } from './FeedingLogScalarWhereInput.schema';
import { FeedingLogUpdateManyMutationInputObjectSchema as FeedingLogUpdateManyMutationInputObjectSchema } from './FeedingLogUpdateManyMutationInput.schema';
import { FeedingLogUncheckedUpdateManyWithoutPatientInputObjectSchema as FeedingLogUncheckedUpdateManyWithoutPatientInputObjectSchema } from './FeedingLogUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FeedingLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FeedingLogUpdateManyMutationInputObjectSchema), z.lazy(() => FeedingLogUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const FeedingLogUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.FeedingLogUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.FeedingLogUpdateManyWithWhereWithoutPatientInput>;
export const FeedingLogUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
