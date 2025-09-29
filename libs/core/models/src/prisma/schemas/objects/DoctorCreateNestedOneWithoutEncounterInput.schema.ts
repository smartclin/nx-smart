import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutEncounterInputObjectSchema as DoctorCreateWithoutEncounterInputObjectSchema } from './DoctorCreateWithoutEncounterInput.schema';
import { DoctorUncheckedCreateWithoutEncounterInputObjectSchema as DoctorUncheckedCreateWithoutEncounterInputObjectSchema } from './DoctorUncheckedCreateWithoutEncounterInput.schema';
import { DoctorCreateOrConnectWithoutEncounterInputObjectSchema as DoctorCreateOrConnectWithoutEncounterInputObjectSchema } from './DoctorCreateOrConnectWithoutEncounterInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutEncounterInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutEncounterInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutEncounterInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutEncounterInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutEncounterInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutEncounterInput>;
export const DoctorCreateNestedOneWithoutEncounterInputObjectZodSchema = makeSchema();
