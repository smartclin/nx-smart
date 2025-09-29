import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithoutMedicalRecordInputObjectSchema as LabTestUpdateWithoutMedicalRecordInputObjectSchema } from './LabTestUpdateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedUpdateWithoutMedicalRecordInput.schema';
import { LabTestCreateWithoutMedicalRecordInputObjectSchema as LabTestCreateWithoutMedicalRecordInputObjectSchema } from './LabTestCreateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LabTestUpdateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema)]),
  create: z.union([z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput>;
export const LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputObjectZodSchema = makeSchema();
