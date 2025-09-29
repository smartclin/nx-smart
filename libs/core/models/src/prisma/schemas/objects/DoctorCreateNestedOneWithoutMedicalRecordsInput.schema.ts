import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutMedicalRecordsInputObjectSchema as DoctorCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedCreateWithoutMedicalRecordsInput.schema';
import { DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema as DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateOrConnectWithoutMedicalRecordsInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutMedicalRecordsInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutMedicalRecordsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutMedicalRecordsInput>;
export const DoctorCreateNestedOneWithoutMedicalRecordsInputObjectZodSchema = makeSchema();
