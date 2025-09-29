import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './DiagnosisWhereUniqueInput.schema';
import { DiagnosisUpdateWithoutDoctorInputObjectSchema as DiagnosisUpdateWithoutDoctorInputObjectSchema } from './DiagnosisUpdateWithoutDoctorInput.schema';
import { DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema as DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedUpdateWithoutDoctorInput.schema';
import { DiagnosisCreateWithoutDoctorInputObjectSchema as DiagnosisCreateWithoutDoctorInputObjectSchema } from './DiagnosisCreateWithoutDoctorInput.schema';
import { DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema as DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DiagnosisUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => DiagnosisCreateWithoutDoctorInputObjectSchema), z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput>;
export const DiagnosisUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
