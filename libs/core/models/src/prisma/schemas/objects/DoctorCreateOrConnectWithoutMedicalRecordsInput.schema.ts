import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutMedicalRecordsInputObjectSchema as DoctorCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedCreateWithoutMedicalRecordsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutMedicalRecordsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutMedicalRecordsInput>;
export const DoctorCreateOrConnectWithoutMedicalRecordsInputObjectZodSchema = makeSchema();
