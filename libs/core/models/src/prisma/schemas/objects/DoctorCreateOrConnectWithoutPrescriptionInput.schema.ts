import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutPrescriptionInputObjectSchema as DoctorCreateWithoutPrescriptionInputObjectSchema } from './DoctorCreateWithoutPrescriptionInput.schema';
import { DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema as DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema } from './DoctorUncheckedCreateWithoutPrescriptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutPrescriptionInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutPrescriptionInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutPrescriptionInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutPrescriptionInput>;
export const DoctorCreateOrConnectWithoutPrescriptionInputObjectZodSchema = makeSchema();
