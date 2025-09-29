import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutPatientInputObjectSchema as EncounterCreateWithoutPatientInputObjectSchema } from './EncounterCreateWithoutPatientInput.schema';
import { EncounterUncheckedCreateWithoutPatientInputObjectSchema as EncounterUncheckedCreateWithoutPatientInputObjectSchema } from './EncounterUncheckedCreateWithoutPatientInput.schema';
import { EncounterCreateOrConnectWithoutPatientInputObjectSchema as EncounterCreateOrConnectWithoutPatientInputObjectSchema } from './EncounterCreateOrConnectWithoutPatientInput.schema';
import { PatientEncounterCreateManyPatientInputEnvelopeObjectSchema as EncounterCreateManyPatientInputEnvelopeObjectSchema } from './EncounterCreateManyPatientInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EncounterUncheckedCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.EncounterUncheckedCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUncheckedCreateNestedManyWithoutPatientInput>;
export const EncounterUncheckedCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
