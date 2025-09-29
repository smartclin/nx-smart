import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUpdateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedUpdateWithoutMedicalRecordsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutMedicalRecordsInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput>;
export const DoctorUpdateToOneWithWhereWithoutMedicalRecordsInputObjectZodSchema = makeSchema();
