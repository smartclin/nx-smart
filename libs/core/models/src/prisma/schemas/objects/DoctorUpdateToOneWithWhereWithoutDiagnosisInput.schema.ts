import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutDiagnosisInputObjectSchema as DoctorUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUpdateWithoutDiagnosisInput.schema';
import { DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema as DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutDiagnosisInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDiagnosisInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDiagnosisInput>;
export const DoctorUpdateToOneWithWhereWithoutDiagnosisInputObjectZodSchema = makeSchema();
