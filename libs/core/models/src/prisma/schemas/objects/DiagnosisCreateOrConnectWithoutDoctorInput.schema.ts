import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisCreateWithoutDoctorInputObjectSchema as DiagnosisCreateWithoutDoctorInputObjectSchema } from './DiagnosisCreateWithoutDoctorInput.schema';
import { DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema as DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutDoctorInput>;
export const DiagnosisCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
