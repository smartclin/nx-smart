import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema';
import { MedicalRecordsUpdateManyMutationInputObjectSchema as MedicalRecordsUpdateManyMutationInputObjectSchema } from './MedicalRecordsUpdateManyMutationInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutPatientInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutPatientInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateManyMutationInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutPatientInput>;
export const MedicalRecordsUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
