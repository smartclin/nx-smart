import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutPrescriptionInputObjectSchema as DoctorCreateWithoutPrescriptionInputObjectSchema } from './DoctorCreateWithoutPrescriptionInput.schema';
import { DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema as DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedCreateWithoutPrescriptionInput.schema';
import { DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema as DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema } from './DoctorCreateOrConnectWithoutPrescriptionInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutPrescriptionInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutPrescriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutPrescriptionInput>;
export const DoctorCreateNestedOneWithoutPrescriptionInputObjectZodSchema = makeSchema();
