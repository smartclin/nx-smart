import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionCreateWithoutMedicalRecordInputObjectSchema as PrescriptionCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInput.schema';
import { PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema as PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateOrConnectWithoutMedicalRecordInput.schema';
import { MedicalRecordPrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema as PrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema } from './PrescriptionCreateManyMedicalRecordInputEnvelope.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema).array(), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PrescriptionCreateManyMedicalRecordInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PrescriptionWhereUniqueInputObjectSchema), z.lazy(() => PrescriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutMedicalRecordInput>;
export const PrescriptionCreateNestedManyWithoutMedicalRecordInputObjectZodSchema = makeSchema();
