import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema';
import { PrescriptionUpdateManyMutationInputObjectSchema as PrescriptionUpdateManyMutationInputObjectSchema } from './PrescriptionUpdateManyMutationInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutPatientInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutPatientInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateManyMutationInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const PrescriptionUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput>;
export const PrescriptionUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
