import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUpdateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInput.schema';
import { MedicalRecordsCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema)]),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema)]),
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional()
}).strict();
export const MedicalRecordsUpsertWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertWithoutVitalSignsInput>;
export const MedicalRecordsUpsertWithoutVitalSignsInputObjectZodSchema = makeSchema();
