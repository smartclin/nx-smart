import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutVitalSignsInput.schema';
import { MedicalRecordsUpsertWithoutVitalSignsInputObjectSchema as MedicalRecordsUpsertWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUpsertWithoutVitalSignsInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema as MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInput.schema';
import { MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUpdateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicalRecordsUpsertWithoutVitalSignsInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputObjectSchema)]).optional()
}).strict();
export const MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInput>;
export const MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInputObjectZodSchema = makeSchema();
