import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutPrescriptionsInputObjectSchema as PatientUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUpdateWithoutPrescriptionsInput.schema';
import { PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema as PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedUpdateWithoutPrescriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutPrescriptionsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPrescriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPrescriptionsInput>;
export const PatientUpdateToOneWithWhereWithoutPrescriptionsInputObjectZodSchema = makeSchema();
