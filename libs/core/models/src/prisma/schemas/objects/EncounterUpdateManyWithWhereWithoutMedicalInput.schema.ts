import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema';
import { EncounterUpdateManyMutationInputObjectSchema as EncounterUpdateManyMutationInputObjectSchema } from './EncounterUpdateManyMutationInput.schema';
import { EncounterUncheckedUpdateManyWithoutMedicalInputObjectSchema as EncounterUncheckedUpdateManyWithoutMedicalInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateManyMutationInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateManyWithoutMedicalInputObjectSchema)])
}).strict();
export const EncounterUpdateManyWithWhereWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutMedicalInput>;
export const EncounterUpdateManyWithWhereWithoutMedicalInputObjectZodSchema = makeSchema();
