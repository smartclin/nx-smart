import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutDiagnosisInputObjectSchema as DoctorCreateWithoutDiagnosisInputObjectSchema } from './DoctorCreateWithoutDiagnosisInput.schema';
import { DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema as DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema } from './DoctorUncheckedCreateWithoutDiagnosisInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutDiagnosisInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutDiagnosisInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDiagnosisInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutDiagnosisInput>;
export const DoctorCreateOrConnectWithoutDiagnosisInputObjectZodSchema = makeSchema();
