import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutDiagnosisInputObjectSchema as DoctorCreateWithoutDiagnosisInputObjectSchema } from './DoctorCreateWithoutDiagnosisInput.schema';
import { DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema as DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedCreateWithoutDiagnosisInput.schema';
import { DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema as DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema } from './DoctorCreateOrConnectWithoutDiagnosisInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutDiagnosisInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDiagnosisInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutDiagnosisInput>;
export const DoctorCreateNestedOneWithoutDiagnosisInputObjectZodSchema = makeSchema();
