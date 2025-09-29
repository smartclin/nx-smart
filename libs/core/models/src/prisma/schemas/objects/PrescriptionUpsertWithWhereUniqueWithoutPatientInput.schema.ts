import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutPatientInputObjectSchema as PrescriptionUpdateWithoutPatientInputObjectSchema } from './PrescriptionUpdateWithoutPatientInput.schema';
import { PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema as PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutPatientInput.schema';
import { PrescriptionCreateWithoutPatientInputObjectSchema as PrescriptionCreateWithoutPatientInputObjectSchema } from './PrescriptionCreateWithoutPatientInput.schema';
import { PrescriptionUncheckedCreateWithoutPatientInputObjectSchema as PrescriptionUncheckedCreateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PrescriptionUpdateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput>;
export const PrescriptionUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
