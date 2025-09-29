import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema)])
}).strict();
export const MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutVitalSignsInput>;
export const MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectZodSchema = makeSchema();
