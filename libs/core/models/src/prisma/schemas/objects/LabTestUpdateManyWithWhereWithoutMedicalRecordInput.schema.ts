import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestScalarWhereInputObjectSchema as LabTestScalarWhereInputObjectSchema } from './LabTestScalarWhereInput.schema';
import { LabTestUpdateManyMutationInputObjectSchema as LabTestUpdateManyMutationInputObjectSchema } from './LabTestUpdateManyMutationInput.schema';
import { LabTestUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema as LabTestUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema } from './LabTestUncheckedUpdateManyWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LabTestUpdateManyMutationInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutMedicalRecordInput>;
export const LabTestUpdateManyWithWhereWithoutMedicalRecordInputObjectZodSchema = makeSchema();
