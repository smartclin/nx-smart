import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutMedicalInputObjectSchema as PatientUpdateWithoutMedicalInputObjectSchema } from './PatientUpdateWithoutMedicalInput.schema';
import { PatientUncheckedUpdateWithoutMedicalInputObjectSchema as PatientUncheckedUpdateWithoutMedicalInputObjectSchema } from './PatientUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutMedicalInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutMedicalInput>;
export const PatientUpdateToOneWithWhereWithoutMedicalInputObjectZodSchema = makeSchema();
