import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisCreateWithoutMedicalInputObjectSchema as DiagnosisCreateWithoutMedicalInputObjectSchema } from './DiagnosisCreateWithoutMedicalInput.schema';
import { DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema as DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedCreateWithoutMedicalInput.schema';
import { DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema as DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema } from './DiagnosisCreateOrConnectWithoutMedicalInput.schema';
import { MedicalDiagnosisCreateManyMedicalInputEnvelopeObjectSchema as DiagnosisCreateManyMedicalInputEnvelopeObjectSchema } from './DiagnosisCreateManyMedicalInputEnvelope.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DiagnosisCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DiagnosisWhereUniqueInputObjectSchema), z.lazy(() => DiagnosisWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DiagnosisUncheckedCreateNestedManyWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisUncheckedCreateNestedManyWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUncheckedCreateNestedManyWithoutMedicalInput>;
export const DiagnosisUncheckedCreateNestedManyWithoutMedicalInputObjectZodSchema = makeSchema();
