import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutMedicalRecordInputObjectSchema as PrescriptionUpdateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUpdateWithoutMedicalRecordInput.schema';
import { PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateWithoutMedicalRecordInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput>;
export const PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputObjectZodSchema = makeSchema();
