import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisCreateWithoutDoctorInputObjectSchema as DiagnosisCreateWithoutDoctorInputObjectSchema } from './DiagnosisCreateWithoutDoctorInput.schema';
import { DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema as DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedCreateWithoutDoctorInput.schema';
import { DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema as DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema } from './DiagnosisCreateOrConnectWithoutDoctorInput.schema';
import { DoctorDiagnosisCreateManyDoctorInputEnvelopeObjectSchema as DiagnosisCreateManyDoctorInputEnvelopeObjectSchema } from './DiagnosisCreateManyDoctorInputEnvelope.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiagnosisCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUncheckedCreateNestedManyWithoutDoctorInput>;
export const DiagnosisUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
