import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './MedicalRecordsWhereInput.schema';
import { MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUpdateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema)])
}).strict();
export const MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInput>;
export const MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputObjectZodSchema = makeSchema();
