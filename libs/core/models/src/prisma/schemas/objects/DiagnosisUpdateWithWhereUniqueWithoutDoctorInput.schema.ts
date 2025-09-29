import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithoutDoctorInputObjectSchema as DiagnosisUpdateWithoutDoctorInputObjectSchema } from './DiagnosisUpdateWithoutDoctorInput.schema';
import { DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema as DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DiagnosisUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput>;
export const DiagnosisUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
