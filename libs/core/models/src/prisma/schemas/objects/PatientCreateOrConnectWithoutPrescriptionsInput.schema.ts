import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutPrescriptionsInputObjectSchema as PatientCreateWithoutPrescriptionsInputObjectSchema } from './PatientCreateWithoutPrescriptionsInput.schema';
import { PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema as PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedCreateWithoutPrescriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutPrescriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutPrescriptionsInput>;
export const PatientCreateOrConnectWithoutPrescriptionsInputObjectZodSchema = makeSchema();
