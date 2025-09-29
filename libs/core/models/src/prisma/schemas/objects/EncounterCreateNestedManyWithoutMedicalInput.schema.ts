import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutMedicalInputObjectSchema as EncounterCreateWithoutMedicalInputObjectSchema } from './EncounterCreateWithoutMedicalInput.schema';
import { EncounterUncheckedCreateWithoutMedicalInputObjectSchema as EncounterUncheckedCreateWithoutMedicalInputObjectSchema } from './EncounterUncheckedCreateWithoutMedicalInput.schema';
import { EncounterCreateOrConnectWithoutMedicalInputObjectSchema as EncounterCreateOrConnectWithoutMedicalInputObjectSchema } from './EncounterCreateOrConnectWithoutMedicalInput.schema';
import { MedicalEncounterCreateManyMedicalInputEnvelopeObjectSchema as EncounterCreateManyMedicalInputEnvelopeObjectSchema } from './EncounterCreateManyMedicalInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterCreateWithoutMedicalInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutMedicalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutMedicalInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutMedicalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyMedicalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EncounterCreateNestedManyWithoutMedicalInputObjectSchema: z.ZodType<Prisma.EncounterCreateNestedManyWithoutMedicalInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateNestedManyWithoutMedicalInput>;
export const EncounterCreateNestedManyWithoutMedicalInputObjectZodSchema = makeSchema();
