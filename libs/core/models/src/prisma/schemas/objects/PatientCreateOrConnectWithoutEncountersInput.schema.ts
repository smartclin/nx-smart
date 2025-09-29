import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutEncountersInputObjectSchema as PatientCreateWithoutEncountersInputObjectSchema } from './PatientCreateWithoutEncountersInput.schema';
import { PatientUncheckedCreateWithoutEncountersInputObjectSchema as PatientUncheckedCreateWithoutEncountersInputObjectSchema } from './PatientUncheckedCreateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutEncountersInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutEncountersInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutEncountersInput>;
export const PatientCreateOrConnectWithoutEncountersInputObjectZodSchema = makeSchema();
