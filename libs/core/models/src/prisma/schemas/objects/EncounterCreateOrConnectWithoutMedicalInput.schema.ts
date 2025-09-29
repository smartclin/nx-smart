import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterCreateWithoutMedicalInputObjectSchema as EncounterCreateWithoutMedicalInputObjectSchema } from './EncounterCreateWithoutMedicalInput.schema';
import { EncounterUncheckedCreateWithoutMedicalInputObjectSchema as EncounterUncheckedCreateWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema)])
}).strict();
export const EncounterCreateOrConnectWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterCreateOrConnectWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateOrConnectWithoutMedicalInput>;
export const EncounterCreateOrConnectWithoutMedicalInputObjectZodSchema = makeSchema();
