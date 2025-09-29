import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutPatientInputObjectSchema as PrescriptionUpdateWithoutPatientInputObjectSchema } from './PrescriptionUpdateWithoutPatientInput.schema';
import { PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema as PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput>;
export const PrescriptionUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
