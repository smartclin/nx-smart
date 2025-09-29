import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutPrescriptionInputObjectSchema as DoctorUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUpdateWithoutPrescriptionInput.schema';
import { DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema as DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInput.schema';
import { DoctorCreateWithoutPrescriptionInputObjectSchema as DoctorCreateWithoutPrescriptionInputObjectSchema } from './DoctorCreateWithoutPrescriptionInput.schema';
import { DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema as DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedCreateWithoutPrescriptionInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutPrescriptionInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutPrescriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutPrescriptionInput>;
export const DoctorUpsertWithoutPrescriptionInputObjectZodSchema = makeSchema();
