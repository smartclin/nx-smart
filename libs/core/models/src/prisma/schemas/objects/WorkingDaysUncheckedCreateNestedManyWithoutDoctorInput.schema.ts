import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { WorkingDaysCreateWithoutDoctorInputObjectSchema as WorkingDaysCreateWithoutDoctorInputObjectSchema } from './WorkingDaysCreateWithoutDoctorInput.schema';
import { WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema as WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInput.schema';
import { WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema as WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema } from './WorkingDaysCreateOrConnectWithoutDoctorInput.schema';
import { DoctorWorkingDaysCreateManyDoctorInputEnvelopeObjectSchema as WorkingDaysCreateManyDoctorInputEnvelopeObjectSchema } from './WorkingDaysCreateManyDoctorInputEnvelope.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './WorkingDaysWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkingDaysCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema), z.lazy(() => WorkingDaysWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.WorkingDaysUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkingDaysUncheckedCreateNestedManyWithoutDoctorInput>;
export const WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
