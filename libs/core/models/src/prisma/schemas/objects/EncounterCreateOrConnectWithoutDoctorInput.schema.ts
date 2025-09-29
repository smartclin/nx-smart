import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterCreateWithoutDoctorInputObjectSchema as EncounterCreateWithoutDoctorInputObjectSchema } from './EncounterCreateWithoutDoctorInput.schema';
import { EncounterUncheckedCreateWithoutDoctorInputObjectSchema as EncounterUncheckedCreateWithoutDoctorInputObjectSchema } from './EncounterUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EncounterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EncounterCreateWithoutDoctorInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const EncounterCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.EncounterCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterCreateOrConnectWithoutDoctorInput>;
export const EncounterCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
