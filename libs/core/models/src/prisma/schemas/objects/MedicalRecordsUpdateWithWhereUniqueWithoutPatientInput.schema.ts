import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateWithoutPatientInputObjectSchema as MedicalRecordsUpdateWithoutPatientInputObjectSchema } from './MedicalRecordsUpdateWithoutPatientInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutPatientInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutPatientInput>;
export const MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
