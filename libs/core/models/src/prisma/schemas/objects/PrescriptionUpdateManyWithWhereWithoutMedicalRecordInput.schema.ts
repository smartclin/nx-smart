import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema';
import { PrescriptionUpdateManyMutationInputObjectSchema as PrescriptionUpdateManyMutationInputObjectSchema } from './PrescriptionUpdateManyMutationInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutMedicalRecordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateManyMutationInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputObjectSchema)])
}).strict();
export const PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput>;
export const PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputObjectZodSchema = makeSchema();
