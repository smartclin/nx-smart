import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DiagnosisScalarWhereInputObjectSchema as DiagnosisScalarWhereInputObjectSchema } from './DiagnosisScalarWhereInput.schema';
import { DiagnosisUpdateManyMutationInputObjectSchema as DiagnosisUpdateManyMutationInputObjectSchema } from './DiagnosisUpdateManyMutationInput.schema';
import { DiagnosisUncheckedUpdateManyWithoutMedicalInputObjectSchema as DiagnosisUncheckedUpdateManyWithoutMedicalInputObjectSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiagnosisScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DiagnosisUpdateManyMutationInputObjectSchema), z.lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalInputObjectSchema)])
}).strict();
export const DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutMedicalInput>;
export const DiagnosisUpdateManyWithWhereWithoutMedicalInputObjectZodSchema = makeSchema();
