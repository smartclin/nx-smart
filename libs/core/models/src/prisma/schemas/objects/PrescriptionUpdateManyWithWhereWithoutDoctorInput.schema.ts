import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionScalarWhereInputObjectSchema as PrescriptionScalarWhereInputObjectSchema } from './PrescriptionScalarWhereInput.schema';
import { PrescriptionUpdateManyMutationInputObjectSchema as PrescriptionUpdateManyMutationInputObjectSchema } from './PrescriptionUpdateManyMutationInput.schema';
import { PrescriptionUncheckedUpdateManyWithoutDoctorInputObjectSchema as PrescriptionUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './PrescriptionUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PrescriptionUpdateManyMutationInputObjectSchema), z.lazy(() => PrescriptionUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutDoctorInput>;
export const PrescriptionUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
