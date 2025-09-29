import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysScalarWhereInputObjectSchema as WorkingDaysScalarWhereInputObjectSchema } from './WorkingDaysScalarWhereInput.schema';
import { WorkingDaysUpdateManyMutationInputObjectSchema as WorkingDaysUpdateManyMutationInputObjectSchema } from './WorkingDaysUpdateManyMutationInput.schema';
import { WorkingDaysUncheckedUpdateManyWithoutDoctorInputObjectSchema as WorkingDaysUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkingDaysScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkingDaysUpdateManyMutationInputObjectSchema), z.lazy(() => WorkingDaysUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUpdateManyWithWhereWithoutDoctorInput>;
export const WorkingDaysUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
