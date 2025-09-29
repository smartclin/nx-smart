import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutDiagnosisInputObjectSchema as DoctorUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUpdateWithoutDiagnosisInput.schema';
import { DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema as DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInput.schema';
import { DoctorCreateWithoutDiagnosisInputObjectSchema as DoctorCreateWithoutDiagnosisInputObjectSchema } from './DoctorCreateWithoutDiagnosisInput.schema';
import { DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema as DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedCreateWithoutDiagnosisInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutDiagnosisInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutDiagnosisInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutDiagnosisInput>;
export const DoctorUpsertWithoutDiagnosisInputObjectZodSchema = makeSchema();
