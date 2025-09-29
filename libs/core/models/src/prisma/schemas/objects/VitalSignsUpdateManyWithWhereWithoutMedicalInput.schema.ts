import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsScalarWhereInputObjectSchema as VitalSignsScalarWhereInputObjectSchema } from './VitalSignsScalarWhereInput.schema';
import { VitalSignsUpdateManyMutationInputObjectSchema as VitalSignsUpdateManyMutationInputObjectSchema } from './VitalSignsUpdateManyMutationInput.schema';
import { VitalSignsUncheckedUpdateManyWithoutMedicalInputObjectSchema as VitalSignsUncheckedUpdateManyWithoutMedicalInputObjectSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VitalSignsUpdateManyMutationInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalInputObjectSchema)])
}).strict();
export const VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithWhereWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyWithWhereWithoutMedicalInput>;
export const VitalSignsUpdateManyWithWhereWithoutMedicalInputObjectZodSchema = makeSchema();
