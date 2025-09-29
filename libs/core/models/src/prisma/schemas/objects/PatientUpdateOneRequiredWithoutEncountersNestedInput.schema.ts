import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutEncountersInputObjectSchema as PatientCreateWithoutEncountersInputObjectSchema } from './PatientCreateWithoutEncountersInput.schema';
import { PatientUncheckedCreateWithoutEncountersInputObjectSchema as PatientUncheckedCreateWithoutEncountersInputObjectSchema } from './PatientUncheckedCreateWithoutEncountersInput.schema';
import { PatientCreateOrConnectWithoutEncountersInputObjectSchema as PatientCreateOrConnectWithoutEncountersInputObjectSchema } from './PatientCreateOrConnectWithoutEncountersInput.schema';
import { PatientUpsertWithoutEncountersInputObjectSchema as PatientUpsertWithoutEncountersInputObjectSchema } from './PatientUpsertWithoutEncountersInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutEncountersInputObjectSchema as PatientUpdateToOneWithWhereWithoutEncountersInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutEncountersInput.schema';
import { PatientUpdateWithoutEncountersInputObjectSchema as PatientUpdateWithoutEncountersInputObjectSchema } from './PatientUpdateWithoutEncountersInput.schema';
import { PatientUncheckedUpdateWithoutEncountersInputObjectSchema as PatientUncheckedUpdateWithoutEncountersInputObjectSchema } from './PatientUncheckedUpdateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutEncountersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutEncountersInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutEncountersInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutEncountersInputObjectSchema), z.lazy(() => PatientUpdateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutEncountersInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutEncountersNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutEncountersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutEncountersNestedInput>;
export const PatientUpdateOneRequiredWithoutEncountersNestedInputObjectZodSchema = makeSchema();
