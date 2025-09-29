import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutPrescriptionsInputObjectSchema as PatientCreateWithoutPrescriptionsInputObjectSchema } from './PatientCreateWithoutPrescriptionsInput.schema';
import { PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema as PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedCreateWithoutPrescriptionsInput.schema';
import { PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema as PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema } from './PatientCreateOrConnectWithoutPrescriptionsInput.schema';
import { PatientUpsertWithoutPrescriptionsInputObjectSchema as PatientUpsertWithoutPrescriptionsInputObjectSchema } from './PatientUpsertWithoutPrescriptionsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutPrescriptionsInputObjectSchema as PatientUpdateToOneWithWhereWithoutPrescriptionsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutPrescriptionsInput.schema';
import { PatientUpdateWithoutPrescriptionsInputObjectSchema as PatientUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUpdateWithoutPrescriptionsInput.schema';
import { PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema as PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema } from './PatientUncheckedUpdateWithoutPrescriptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutPrescriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPrescriptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutPrescriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUpdateWithoutPrescriptionsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutPrescriptionsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPrescriptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPrescriptionsNestedInput>;
export const PatientUpdateOneRequiredWithoutPrescriptionsNestedInputObjectZodSchema = makeSchema();
