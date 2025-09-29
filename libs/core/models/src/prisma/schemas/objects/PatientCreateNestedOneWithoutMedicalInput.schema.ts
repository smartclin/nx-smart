import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutMedicalInputObjectSchema as PatientCreateWithoutMedicalInputObjectSchema } from './PatientCreateWithoutMedicalInput.schema';
import { PatientUncheckedCreateWithoutMedicalInputObjectSchema as PatientUncheckedCreateWithoutMedicalInputObjectSchema } from './PatientUncheckedCreateWithoutMedicalInput.schema';
import { PatientCreateOrConnectWithoutMedicalInputObjectSchema as PatientCreateOrConnectWithoutMedicalInputObjectSchema } from './PatientCreateOrConnectWithoutMedicalInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutMedicalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutMedicalInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutMedicalInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutMedicalInput>;
export const PatientCreateNestedOneWithoutMedicalInputObjectZodSchema = makeSchema();
