import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateWithoutDoctorInputObjectSchema as EncounterUpdateWithoutDoctorInputObjectSchema } from './EncounterUpdateWithoutDoctorInput.schema';
import { EncounterUncheckedUpdateWithoutDoctorInputObjectSchema as EncounterUncheckedUpdateWithoutDoctorInputObjectSchema } from './EncounterUncheckedUpdateWithoutDoctorInput.schema';
import { EncounterCreateWithoutDoctorInputObjectSchema as EncounterCreateWithoutDoctorInputObjectSchema } from './EncounterCreateWithoutDoctorInput.schema';
import { EncounterUncheckedCreateWithoutDoctorInputObjectSchema as EncounterUncheckedCreateWithoutDoctorInputObjectSchema } from './EncounterUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EncounterUpdateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpsertWithWhereUniqueWithoutDoctorInput>;
export const EncounterUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
