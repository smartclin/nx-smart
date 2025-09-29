import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './PrescriptionWhereUniqueInput.schema';
import { PrescriptionCreateWithoutPatientInputObjectSchema as PrescriptionCreateWithoutPatientInputObjectSchema } from './PrescriptionCreateWithoutPatientInput.schema';
import { PrescriptionUncheckedCreateWithoutPatientInputObjectSchema as PrescriptionUncheckedCreateWithoutPatientInputObjectSchema } from './PrescriptionUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PrescriptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PrescriptionCreateWithoutPatientInputObjectSchema), z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const PrescriptionCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutPatientInput>;
export const PrescriptionCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
