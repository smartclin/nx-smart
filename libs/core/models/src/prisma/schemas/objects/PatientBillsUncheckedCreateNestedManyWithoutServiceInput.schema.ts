import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsCreateWithoutServiceInputObjectSchema as PatientBillsCreateWithoutServiceInputObjectSchema } from './PatientBillsCreateWithoutServiceInput.schema';
import { PatientBillsUncheckedCreateWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateWithoutServiceInput.schema';
import { PatientBillsCreateOrConnectWithoutServiceInputObjectSchema as PatientBillsCreateOrConnectWithoutServiceInputObjectSchema } from './PatientBillsCreateOrConnectWithoutServiceInput.schema';
import { ServicePatientBillsCreateManyServiceInputEnvelopeObjectSchema as PatientBillsCreateManyServiceInputEnvelopeObjectSchema } from './PatientBillsCreateManyServiceInputEnvelope.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientBillsCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsUncheckedCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUncheckedCreateNestedManyWithoutServiceInput>;
export const PatientBillsUncheckedCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
