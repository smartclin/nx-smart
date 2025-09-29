import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutMedicalInputObjectSchema as PatientCreateWithoutMedicalInputObjectSchema } from './PatientCreateWithoutMedicalInput.schema';
import { PatientUncheckedCreateWithoutMedicalInputObjectSchema as PatientUncheckedCreateWithoutMedicalInputObjectSchema } from './PatientUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutMedicalInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutMedicalInput>;
export const PatientCreateOrConnectWithoutMedicalInputObjectZodSchema = makeSchema();
