import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithoutMedicalRecordInputObjectSchema as LabTestUpdateWithoutMedicalRecordInputObjectSchema } from './LabTestUpdateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedUpdateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LabTestUpdateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput>;
export const LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputObjectZodSchema = makeSchema();
