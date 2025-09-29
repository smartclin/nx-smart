import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsScalarWhereInputObjectSchema as MedicalRecordsScalarWhereInputObjectSchema } from './MedicalRecordsScalarWhereInput.schema';
import { MedicalRecordsUpdateManyMutationInputObjectSchema as MedicalRecordsUpdateManyMutationInputObjectSchema } from './MedicalRecordsUpdateManyMutationInput.schema';
import { MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputObjectSchema as MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputObjectSchema } from './MedicalRecordsUncheckedUpdateManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MedicalRecordsUpdateManyMutationInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutAppointmentInput>;
export const MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputObjectZodSchema = makeSchema();
