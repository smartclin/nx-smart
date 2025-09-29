import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutEncountersInputObjectSchema as PatientCreateWithoutEncountersInputObjectSchema } from './PatientCreateWithoutEncountersInput.schema';
import { PatientUncheckedCreateWithoutEncountersInputObjectSchema as PatientUncheckedCreateWithoutEncountersInputObjectSchema } from './PatientUncheckedCreateWithoutEncountersInput.schema';
import { PatientCreateOrConnectWithoutEncountersInputObjectSchema as PatientCreateOrConnectWithoutEncountersInputObjectSchema } from './PatientCreateOrConnectWithoutEncountersInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutEncountersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutEncountersInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutEncountersInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutEncountersInput>;
export const PatientCreateNestedOneWithoutEncountersInputObjectZodSchema = makeSchema();
