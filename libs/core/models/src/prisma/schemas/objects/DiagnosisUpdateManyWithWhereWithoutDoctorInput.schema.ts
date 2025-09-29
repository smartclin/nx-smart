import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisScalarWhereInputObjectSchema as DiagnosisScalarWhereInputObjectSchema } from './DiagnosisScalarWhereInput.schema';
import { DiagnosisUpdateManyMutationInputObjectSchema as DiagnosisUpdateManyMutationInputObjectSchema } from './DiagnosisUpdateManyMutationInput.schema';
import { DiagnosisUncheckedUpdateManyWithoutDoctorInputObjectSchema as DiagnosisUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './DiagnosisUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DiagnosisUpdateManyMutationInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput>;
export const DiagnosisUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
