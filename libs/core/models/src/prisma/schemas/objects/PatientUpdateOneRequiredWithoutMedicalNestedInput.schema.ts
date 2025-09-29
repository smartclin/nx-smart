import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutMedicalInputObjectSchema as PatientCreateWithoutMedicalInputObjectSchema } from './PatientCreateWithoutMedicalInput.schema';
import { PatientUncheckedCreateWithoutMedicalInputObjectSchema as PatientUncheckedCreateWithoutMedicalInputObjectSchema } from './PatientUncheckedCreateWithoutMedicalInput.schema';
import { PatientCreateOrConnectWithoutMedicalInputObjectSchema as PatientCreateOrConnectWithoutMedicalInputObjectSchema } from './PatientCreateOrConnectWithoutMedicalInput.schema';
import { PatientUpsertWithoutMedicalInputObjectSchema as PatientUpsertWithoutMedicalInputObjectSchema } from './PatientUpsertWithoutMedicalInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutMedicalInputObjectSchema as PatientUpdateToOneWithWhereWithoutMedicalInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutMedicalInput.schema';
import { PatientUpdateWithoutMedicalInputObjectSchema as PatientUpdateWithoutMedicalInputObjectSchema } from './PatientUpdateWithoutMedicalInput.schema';
import { PatientUncheckedUpdateWithoutMedicalInputObjectSchema as PatientUncheckedUpdateWithoutMedicalInputObjectSchema } from './PatientUncheckedUpdateWithoutMedicalInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutMedicalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutMedicalInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutMedicalInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutMedicalInputObjectSchema), z.lazy(() => PatientUpdateWithoutMedicalInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutMedicalNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutMedicalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutMedicalNestedInput>;
export const PatientUpdateOneRequiredWithoutMedicalNestedInputObjectZodSchema = makeSchema();
