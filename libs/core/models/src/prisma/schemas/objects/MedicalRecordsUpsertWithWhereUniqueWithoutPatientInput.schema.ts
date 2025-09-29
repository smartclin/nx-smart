import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutPatientInputObjectSchema as MedicalRecordsUpdateWithoutPatientInputObjectSchema } from './MedicalRecordsUpdateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutPatientInput.schema';
import { MedicalRecordsCreateWithoutPatientInputObjectSchema as MedicalRecordsCreateWithoutPatientInputObjectSchema } from './MedicalRecordsCreateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutPatientInput>;
export const MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
