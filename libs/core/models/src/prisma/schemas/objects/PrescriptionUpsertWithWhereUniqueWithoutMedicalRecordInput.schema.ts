import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutMedicalRecordInputObjectSchema as PrescriptionUpdateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUpdateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutMedicalRecordInput.schema';
import { PrescriptionCreateWithoutMedicalRecordInputObjectSchema as PrescriptionCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionCreateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PrescriptionUpdateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema)]),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput>;
export const PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputObjectZodSchema = makeSchema();
