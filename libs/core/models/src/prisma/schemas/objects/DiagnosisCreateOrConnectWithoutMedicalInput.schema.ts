import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisCreateWithoutMedicalInputObjectSchema as DiagnosisCreateWithoutMedicalInputObjectSchema } from './DiagnosisCreateWithoutMedicalInput.schema';
import { DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema as DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const DiagnosisCreateOrConnectWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutMedicalInput>;
export const DiagnosisCreateOrConnectWithoutMedicalInputObjectZodSchema = makeSchema();
