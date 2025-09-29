import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithoutMedicalInputObjectSchema as DiagnosisUpdateWithoutMedicalInputObjectSchema } from './DiagnosisUpdateWithoutMedicalInput.schema';
import { DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema as DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DiagnosisUpdateWithoutMedicalInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateWithoutMedicalInputObjectSchema)])
}).strict();
export const DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutMedicalInput>;
export const DiagnosisUpdateWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
