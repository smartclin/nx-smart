import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutDiagnosisInputObjectSchema as DoctorCreateWithoutDiagnosisInputObjectSchema } from './DoctorCreateWithoutDiagnosisInput.schema';
import { DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema as DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedCreateWithoutDiagnosisInput.schema';
import { DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema as DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema } from './DoctorCreateOrConnectWithoutDiagnosisInput.schema';
import { DoctorUpsertWithoutDiagnosisInputObjectSchema as DoctorUpsertWithoutDiagnosisInputObjectSchema } from './DoctorUpsertWithoutDiagnosisInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutDiagnosisInputObjectSchema as DoctorUpdateToOneWithWhereWithoutDiagnosisInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutDiagnosisInput.schema';
import { DoctorUpdateWithoutDiagnosisInputObjectSchema as DoctorUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUpdateWithoutDiagnosisInput.schema';
import { DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema as DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutDiagnosisInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUpdateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutDiagnosisNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDiagnosisNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDiagnosisNestedInput>;
export const DoctorUpdateOneRequiredWithoutDiagnosisNestedInputObjectZodSchema = makeSchema();
