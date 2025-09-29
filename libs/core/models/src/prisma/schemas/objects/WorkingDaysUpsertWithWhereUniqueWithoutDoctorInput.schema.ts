import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysUpdateWithoutDoctorInputObjectSchema as WorkingDaysUpdateWithoutDoctorInputObjectSchema } from './WorkingDaysUpdateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedUpdateWithoutDoctorInput.schema';
import { WorkingDaysCreateWithoutDoctorInputObjectSchema as WorkingDaysCreateWithoutDoctorInputObjectSchema } from './WorkingDaysCreateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkingDaysUpdateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUpsertWithWhereUniqueWithoutDoctorInput>;
export const WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
