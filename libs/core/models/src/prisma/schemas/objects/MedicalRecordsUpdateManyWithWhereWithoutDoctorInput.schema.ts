import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema';
import { MedicalRecordsUpdateManyMutationInputObjectSchema as MedicalRecordsUpdateManyMutationInputObjectSchema } from './MedicalRecordsUpdateManyMutationInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutDoctorInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateManyMutationInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutDoctorInput>;
export const MedicalRecordsUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
