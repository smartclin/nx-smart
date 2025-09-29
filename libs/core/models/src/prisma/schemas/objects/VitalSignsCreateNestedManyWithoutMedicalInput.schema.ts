import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsCreateWithoutMedicalInputObjectSchema as VitalSignsCreateWithoutMedicalInputObjectSchema } from './VitalSignsCreateWithoutMedicalInput.schema';
import { VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema as VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedCreateWithoutMedicalInput.schema';
import { VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema as VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema } from './VitalSignsCreateOrConnectWithoutMedicalInput.schema';
import { MedicalVitalSignsCreateManyMedicalInputEnvelopeObjectSchema as VitalSignsCreateManyMedicalInputEnvelopeObjectSchema } from './VitalSignsCreateManyMedicalInputEnvelope.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VitalSignsCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VitalSignsWhereUniqueInputObjectSchema), z.lazy(() => VitalSignsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VitalSignsCreateNestedManyWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsCreateNestedManyWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsCreateNestedManyWithoutMedicalInput>;
export const VitalSignsCreateNestedManyWithoutMedicalInputObjectZodSchema = makeSchema();
