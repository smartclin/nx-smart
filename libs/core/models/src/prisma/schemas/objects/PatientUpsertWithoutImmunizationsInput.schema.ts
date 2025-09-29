import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientUpdateWithoutImmunizationsInputObjectSchema as PatientUpdateWithoutImmunizationsInputObjectSchema } from './PatientUpdateWithoutImmunizationsInput.schema';
import { PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema as PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedUpdateWithoutImmunizationsInput.schema';
import { PatientCreateWithoutImmunizationsInputObjectSchema as PatientCreateWithoutImmunizationsInputObjectSchema } from './PatientCreateWithoutImmunizationsInput.schema';
import { PatientUncheckedCreateWithoutImmunizationsInputObjectSchema as PatientUncheckedCreateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedCreateWithoutImmunizationsInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './PatientWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PatientUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutImmunizationsInputObjectSchema)]),
  where: z.lazy(() => PatientWhereInputObjectSchema).optional()
}).strict();
export const PatientUpsertWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithoutImmunizationsInput>;
export const PatientUpsertWithoutImmunizationsInputObjectZodSchema = makeSchema();
