import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutEncountersInputObjectSchema as PatientUpdateWithoutEncountersInputObjectSchema } from './PatientUpdateWithoutEncountersInput.schema';
import { PatientUncheckedUpdateWithoutEncountersInputObjectSchema as PatientUncheckedUpdateWithoutEncountersInputObjectSchema } from './PatientUncheckedUpdateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutEncountersInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutEncountersInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutEncountersInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutEncountersInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutEncountersInput>;
export const PatientUpdateToOneWithWhereWithoutEncountersInputObjectZodSchema = makeSchema();
