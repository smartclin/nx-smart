import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { VitalSignsScalarWhereInputObjectSchema as VitalSignsScalarWhereInputObjectSchema } from './VitalSignsScalarWhereInput.schema';
import { VitalSignsUpdateManyMutationInputObjectSchema as VitalSignsUpdateManyMutationInputObjectSchema } from './VitalSignsUpdateManyMutationInput.schema';
import { VitalSignsUncheckedUpdateManyWithoutEncounterInputObjectSchema as VitalSignsUncheckedUpdateManyWithoutEncounterInputObjectSchema } from './VitalSignsUncheckedUpdateManyWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VitalSignsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VitalSignsUpdateManyMutationInputObjectSchema), z.lazy(() => VitalSignsUncheckedUpdateManyWithoutEncounterInputObjectSchema)])
}).strict();
export const VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithWhereWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.VitalSignsUpdateManyWithWhereWithoutEncounterInput>;
export const VitalSignsUpdateManyWithWhereWithoutEncounterInputObjectZodSchema = makeSchema();
