import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterCreateWithoutPatientInputObjectSchema as EncounterCreateWithoutPatientInputObjectSchema } from './EncounterCreateWithoutPatientInput.schema';
import { EncounterUncheckedCreateWithoutPatientInputObjectSchema as EncounterUncheckedCreateWithoutPatientInputObjectSchema } from './EncounterUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const EncounterCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateOrConnectWithoutPatientInput>;
export const EncounterCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
