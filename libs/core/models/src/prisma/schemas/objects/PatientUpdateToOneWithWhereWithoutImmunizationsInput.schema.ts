import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema';
import { PatientUpdateWithoutImmunizationsInputObjectSchema as PatientUpdateWithoutImmunizationsInputObjectSchema } from './PatientUpdateWithoutImmunizationsInput.schema';
import { PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema as PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedUpdateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PatientUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema)])
}).strict();
export const PatientUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutImmunizationsInput>;
export const PatientUpdateToOneWithWhereWithoutImmunizationsInputObjectZodSchema = makeSchema();
