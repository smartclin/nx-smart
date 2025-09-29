import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './VitalSignsWhereUniqueInput.schema';
import { VitalSignsUpdateWithoutMedicalInputObjectSchema as VitalSignsUpdateWithoutMedicalInputObjectSchema } from './VitalSignsUpdateWithoutMedicalInput.schema';
import { VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema as VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VitalSignsUpdateWithoutMedicalInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateWithoutMedicalInputObjectSchema)])
}).strict();
export const VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateWithWhereUniqueWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateWithWhereUniqueWithoutMedicalInput>;
export const VitalSignsUpdateWithWhereUniqueWithoutMedicalInputObjectZodSchema = makeSchema();
