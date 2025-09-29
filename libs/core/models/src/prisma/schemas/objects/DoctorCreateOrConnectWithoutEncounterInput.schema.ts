import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutEncounterInputObjectSchema as DoctorCreateWithoutEncounterInputObjectSchema } from './DoctorCreateWithoutEncounterInput.schema';
import { DoctorUncheckedCreateWithoutEncounterInputObjectSchema as DoctorUncheckedCreateWithoutEncounterInputObjectSchema } from './DoctorUncheckedCreateWithoutEncounterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutEncounterInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutEncounterInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutEncounterInput>;
export const DoctorCreateOrConnectWithoutEncounterInputObjectZodSchema = makeSchema();
