import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionCreateWithoutDoctorInputObjectSchema as PrescriptionCreateWithoutDoctorInputObjectSchema } from './PrescriptionCreateWithoutDoctorInput.schema';
import { PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema as PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutDoctorInput>;
export const PrescriptionCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
