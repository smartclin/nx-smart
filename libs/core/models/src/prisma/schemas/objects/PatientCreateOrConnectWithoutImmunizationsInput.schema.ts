import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutImmunizationsInputObjectSchema as PatientCreateWithoutImmunizationsInputObjectSchema } from './PatientCreateWithoutImmunizationsInput.schema';
import { PatientUncheckedCreateWithoutImmunizationsInputObjectSchema as PatientUncheckedCreateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedCreateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutImmunizationsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutImmunizationsInput>;
export const PatientCreateOrConnectWithoutImmunizationsInputObjectZodSchema = makeSchema();
