import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutDoctorInputObjectSchema as PrescriptionUpdateWithoutDoctorInputObjectSchema } from './PrescriptionUpdateWithoutDoctorInput.schema';
import { PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema as PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutDoctorInput.schema';
import { PrescriptionCreateWithoutDoctorInputObjectSchema as PrescriptionCreateWithoutDoctorInputObjectSchema } from './PrescriptionCreateWithoutDoctorInput.schema';
import { PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema as PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PrescriptionUpdateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutDoctorInput>;
export const PrescriptionUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
