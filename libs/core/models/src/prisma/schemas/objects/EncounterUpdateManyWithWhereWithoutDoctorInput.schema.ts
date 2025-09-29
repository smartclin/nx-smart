import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterScalarWhereInputObjectSchema as EncounterScalarWhereInputObjectSchema } from './EncounterScalarWhereInput.schema';
import { EncounterUpdateManyMutationInputObjectSchema as EncounterUpdateManyMutationInputObjectSchema } from './EncounterUpdateManyMutationInput.schema';
import { EncounterUncheckedUpdateManyWithoutDoctorInputObjectSchema as EncounterUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './EncounterUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateManyMutationInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const EncounterUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateManyWithWhereWithoutDoctorInput>;
export const EncounterUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
