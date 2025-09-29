import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutPatientInputObjectSchema as PrescriptionCreateWithoutPatientInputObjectSchema } from './PrescriptionCreateWithoutPatientInput.schema';
import { PrescriptionUncheckedCreateWithoutPatientInputObjectSchema as PrescriptionUncheckedCreateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedCreateWithoutPatientInput.schema';
import { PrescriptionCreateOrConnectWithoutPatientInputObjectSchema as PrescriptionCreateOrConnectWithoutPatientInputObjectSchema } from './PrescriptionCreateOrConnectWithoutPatientInput.schema';
import { PatientPrescriptionCreateManyPatientInputEnvelopeObjectSchema as PrescriptionCreateManyPatientInputEnvelopeObjectSchema } from './PrescriptionCreateManyPatientInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutPatientInput>;
export const PrescriptionCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
