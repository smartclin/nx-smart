import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionCreateWithoutMedicalRecordInputObjectSchema as PrescriptionCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutMedicalRecordInput>;
export const PrescriptionCreateOrConnectWithoutMedicalRecordInputObjectZodSchema = makeSchema();
