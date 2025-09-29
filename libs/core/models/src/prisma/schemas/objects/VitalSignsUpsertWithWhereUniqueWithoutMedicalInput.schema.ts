import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithoutMedicalInputObjectSchema as VitalSignsUpdateWithoutMedicalInputObjectSchema } from './VitalSignsUpdateWithoutMedicalInput.schema';
import { VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema as VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedUpdateWithoutMedicalInput.schema';
import { VitalSignsCreateWithoutMedicalInputObjectSchema as VitalSignsCreateWithoutMedicalInputObjectSchema } from './VitalSignsCreateWithoutMedicalInput.schema';
import { VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema as VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VitalSignsUpdateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema)]),
  create: z.union([z.lazy(() => VitalSignsCreateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsUpsertWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpsertWithWhereUniqueWithoutMedicalInput>;
export const VitalSignsUpsertWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
