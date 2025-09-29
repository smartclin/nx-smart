import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutPrescriptionInputObjectSchema as DoctorCreateWithoutPrescriptionInputObjectSchema } from './DoctorCreateWithoutPrescriptionInput.schema';
import { DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema as DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedCreateWithoutPrescriptionInput.schema';
import { DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema as DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema } from './DoctorCreateOrConnectWithoutPrescriptionInput.schema';
import { DoctorUpsertWithoutPrescriptionInputObjectSchema as DoctorUpsertWithoutPrescriptionInputObjectSchema } from './DoctorUpsertWithoutPrescriptionInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutPrescriptionInputObjectSchema as DoctorUpdateToOneWithWhereWithoutPrescriptionInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutPrescriptionInput.schema';
import { DoctorUpdateWithoutPrescriptionInputObjectSchema as DoctorUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUpdateWithoutPrescriptionInput.schema';
import { DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema as DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutPrescriptionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DoctorWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUpdateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneWithoutPrescriptionNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneWithoutPrescriptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneWithoutPrescriptionNestedInput>;
export const DoctorUpdateOneWithoutPrescriptionNestedInputObjectZodSchema = makeSchema();
