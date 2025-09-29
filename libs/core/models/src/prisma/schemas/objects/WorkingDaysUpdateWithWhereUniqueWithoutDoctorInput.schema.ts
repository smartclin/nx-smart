import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysUpdateWithoutDoctorInputObjectSchema as WorkingDaysUpdateWithoutDoctorInputObjectSchema } from './WorkingDaysUpdateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkingDaysUpdateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUpdateWithWhereUniqueWithoutDoctorInput>;
export const WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
