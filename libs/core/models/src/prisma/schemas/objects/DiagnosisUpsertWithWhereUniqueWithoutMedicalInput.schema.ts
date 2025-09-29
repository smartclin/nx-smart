import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithoutMedicalInputObjectSchema as DiagnosisUpdateWithoutMedicalInputObjectSchema } from './DiagnosisUpdateWithoutMedicalInput.schema';
import { DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema as DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedUpdateWithoutMedicalInput.schema';
import { DiagnosisCreateWithoutMedicalInputObjectSchema as DiagnosisCreateWithoutMedicalInputObjectSchema } from './DiagnosisCreateWithoutMedicalInput.schema';
import { DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema as DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DiagnosisUpdateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema)]),
  create: z.union([z.lazy(() => DiagnosisCreateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutMedicalInput>;
export const DiagnosisUpsertWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
