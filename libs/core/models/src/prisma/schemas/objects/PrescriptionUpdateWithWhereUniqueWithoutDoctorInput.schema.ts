import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionUpdateWithoutDoctorInputObjectSchema as PrescriptionUpdateWithoutDoctorInputObjectSchema } from './PrescriptionUpdateWithoutDoctorInput.schema';
import { PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema as PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateWithoutDoctorInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutDoctorInput>;
export const PrescriptionUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
