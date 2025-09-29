import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestCreateWithoutMedicalRecordInputObjectSchema as LabTestCreateWithoutMedicalRecordInputObjectSchema } from './LabTestCreateWithoutMedicalRecordInput.schema';
import { LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema as LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LabTestCreateWithoutMedicalRecordInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const LabTestCreateOrConnectWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestCreateOrConnectWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateOrConnectWithoutMedicalRecordInput>;
export const LabTestCreateOrConnectWithoutMedicalRecordInputObjectZodSchema = makeSchema();
