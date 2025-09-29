import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsCreateWithoutMedicalInputObjectSchema as VitalSignsCreateWithoutMedicalInputObjectSchema } from './VitalSignsCreateWithoutMedicalInput.schema';
import { VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema as VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateOrConnectWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateOrConnectWithoutMedicalInput>;
export const VitalSignsCreateOrConnectWithoutMedicalInputObjectZodSchema = makeSchema();
