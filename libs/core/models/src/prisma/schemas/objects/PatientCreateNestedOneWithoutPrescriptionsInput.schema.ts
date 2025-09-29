import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutPrescriptionsInputObjectSchema as PatientCreateWithoutPrescriptionsInputObjectSchema } from './PatientCreateWithoutPrescriptionsInput.schema';
import { PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema as PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedCreateWithoutPrescriptionsInput.schema';
import { PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema as PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema } from './PatientCreateOrConnectWithoutPrescriptionsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutPrescriptionsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutPrescriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutPrescriptionsInput>;
export const PatientCreateNestedOneWithoutPrescriptionsInputObjectZodSchema = makeSchema();
