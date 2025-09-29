import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutPrescriptionInputObjectSchema as DoctorUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUpdateWithoutPrescriptionInput.schema';
import { DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema as DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutPrescriptionInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutPrescriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutPrescriptionInput>;
export const DoctorUpdateToOneWithWhereWithoutPrescriptionInputObjectZodSchema = makeSchema();
