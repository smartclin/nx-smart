import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutEncounterInputObjectSchema as DoctorCreateWithoutEncounterInputObjectSchema } from './DoctorCreateWithoutEncounterInput.schema';
import { DoctorUncheckedCreateWithoutEncounterInputObjectSchema as DoctorUncheckedCreateWithoutEncounterInputObjectSchema } from './DoctorUncheckedCreateWithoutEncounterInput.schema';
import { DoctorCreateOrConnectWithoutEncounterInputObjectSchema as DoctorCreateOrConnectWithoutEncounterInputObjectSchema } from './DoctorCreateOrConnectWithoutEncounterInput.schema';
import { DoctorUpsertWithoutEncounterInputObjectSchema as DoctorUpsertWithoutEncounterInputObjectSchema } from './DoctorUpsertWithoutEncounterInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutEncounterInputObjectSchema as DoctorUpdateToOneWithWhereWithoutEncounterInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutEncounterInput.schema';
import { DoctorUpdateWithoutEncounterInputObjectSchema as DoctorUpdateWithoutEncounterInputObjectSchema } from './DoctorUpdateWithoutEncounterInput.schema';
import { DoctorUncheckedUpdateWithoutEncounterInputObjectSchema as DoctorUncheckedUpdateWithoutEncounterInputObjectSchema } from './DoctorUncheckedUpdateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutEncounterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutEncounterInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutEncounterInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUpdateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutEncounterInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutEncounterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutEncounterNestedInput>;
export const DoctorUpdateOneRequiredWithoutEncounterNestedInputObjectZodSchema = makeSchema();
