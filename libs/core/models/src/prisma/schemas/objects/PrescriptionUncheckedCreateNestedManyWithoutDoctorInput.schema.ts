import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutDoctorInputObjectSchema as PrescriptionCreateWithoutDoctorInputObjectSchema } from './PrescriptionCreateWithoutDoctorInput.schema';
import { PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema as PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedCreateWithoutDoctorInput.schema';
import { PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema as PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema } from './PrescriptionCreateOrConnectWithoutDoctorInput.schema';
import { DoctorPrescriptionCreateManyDoctorInputEnvelopeObjectSchema as PrescriptionCreateManyDoctorInputEnvelopeObjectSchema } from './PrescriptionCreateManyDoctorInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionUncheckedCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUncheckedCreateNestedManyWithoutDoctorInput>;
export const PrescriptionUncheckedCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
