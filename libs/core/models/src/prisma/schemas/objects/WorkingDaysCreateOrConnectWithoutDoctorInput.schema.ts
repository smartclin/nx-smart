import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysCreateWithoutDoctorInputObjectSchema as WorkingDaysCreateWithoutDoctorInputObjectSchema } from './WorkingDaysCreateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysCreateOrConnectWithoutDoctorInput>;
export const WorkingDaysCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
