import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutDoctorInputObjectSchema as EncounterUpdateWithoutDoctorInputObjectSchema } from './EncounterUpdateWithoutDoctorInput.schema';
import { EncounterUncheckedUpdateWithoutDoctorInputObjectSchema as EncounterUncheckedUpdateWithoutDoctorInputObjectSchema } from './EncounterUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EncounterUpdateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateWithWhereUniqueWithoutDoctorInput>;
export const EncounterUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
