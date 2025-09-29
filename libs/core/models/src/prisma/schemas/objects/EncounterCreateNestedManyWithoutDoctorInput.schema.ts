import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutDoctorInputObjectSchema as EncounterCreateWithoutDoctorInputObjectSchema } from './EncounterCreateWithoutDoctorInput.schema';
import { EncounterUncheckedCreateWithoutDoctorInputObjectSchema as EncounterUncheckedCreateWithoutDoctorInputObjectSchema } from './EncounterUncheckedCreateWithoutDoctorInput.schema';
import { EncounterCreateOrConnectWithoutDoctorInputObjectSchema as EncounterCreateOrConnectWithoutDoctorInputObjectSchema } from './EncounterCreateOrConnectWithoutDoctorInput.schema';
import { DoctorEncounterCreateManyDoctorInputEnvelopeObjectSchema as EncounterCreateManyDoctorInputEnvelopeObjectSchema } from './EncounterCreateManyDoctorInputEnvelope.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EncounterCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => EncounterCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EncounterCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EncounterWhereUniqueInputObjectSchema), z.lazy(() => EncounterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EncounterCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.EncounterCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateNestedManyWithoutDoctorInput>;
export const EncounterCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
