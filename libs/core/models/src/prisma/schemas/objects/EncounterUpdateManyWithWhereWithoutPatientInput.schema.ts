import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema';
import { EncounterUpdateManyMutationInputObjectSchema as EncounterUpdateManyMutationInputObjectSchema } from './EncounterUpdateManyMutationInput.schema';
import { EncounterUncheckedUpdateManyWithoutPatientInputObjectSchema as EncounterUncheckedUpdateManyWithoutPatientInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateManyMutationInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const EncounterUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutPatientInput>;
export const EncounterUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
