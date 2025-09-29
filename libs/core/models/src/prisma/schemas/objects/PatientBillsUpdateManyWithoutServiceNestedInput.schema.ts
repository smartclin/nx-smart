import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsCreateWithoutServiceInputObjectSchema as PatientBillsCreateWithoutServiceInputObjectSchema } from './PatientBillsCreateWithoutServiceInput.schema';
import { PatientBillsUncheckedCreateWithoutServiceInputObjectSchema as PatientBillsUncheckedCreateWithoutServiceInputObjectSchema } from './PatientBillsUncheckedCreateWithoutServiceInput.schema';
import { PatientBillsCreateOrConnectWithoutServiceInputObjectSchema as PatientBillsCreateOrConnectWithoutServiceInputObjectSchema } from './PatientBillsCreateOrConnectWithoutServiceInput.schema';
import { PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectSchema as PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientBillsUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ServicePatientBillsCreateManyServiceInputEnvelopeObjectSchema as PatientBillsCreateManyServiceInputEnvelopeObjectSchema } from './PatientBillsCreateManyServiceInputEnvelope.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './PatientBillsWhereUniqueInput.schema';
import { PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectSchema as PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './PatientBillsUpdateWithWhereUniqueWithoutServiceInput.schema';
import { PatientBillsUpdateManyWithWhereWithoutServiceInputObjectSchema as PatientBillsUpdateManyWithWhereWithoutServiceInputObjectSchema } from './PatientBillsUpdateManyWithWhereWithoutServiceInput.schema';
import { PatientBillsScalarWhereInputObjectSchema as PatientBillsScalarWhereInputObjectSchema } from './PatientBillsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientBillsCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PatientBillsWhereUniqueInputObjectSchema), z.lazy(() => PatientBillsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PatientBillsUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => PatientBillsUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PatientBillsScalarWhereInputObjectSchema), z.lazy(() => PatientBillsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PatientBillsUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateManyWithoutServiceNestedInput>;
export const PatientBillsUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
