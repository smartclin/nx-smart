import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestCreateWithoutMedicalRecordInputObjectSchema as LabTestCreateWithoutMedicalRecordInputObjectSchema } from './LabTestCreateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInput.schema';
import { LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema as LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema } from './LabTestCreateOrConnectWithoutMedicalRecordInput.schema';
import { MedicalRecordLabTestCreateManyMedicalRecordInputEnvelopeObjectSchema as LabTestCreateManyMedicalRecordInputEnvelopeObjectSchema } from './LabTestCreateManyMedicalRecordInputEnvelope.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema).array(), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LabTestCreateManyMedicalRecordInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LabTestCreateNestedManyWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestCreateNestedManyWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateNestedManyWithoutMedicalRecordInput>;
export const LabTestCreateNestedManyWithoutMedicalRecordInputObjectZodSchema = makeSchema();
