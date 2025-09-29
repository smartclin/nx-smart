import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema as MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInput.schema';
import { MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema as MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutVitalSignsInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutVitalSignsInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional()
}).strict();
export const MedicalRecordsCreateNestedOneWithoutVitalSignsInputObjectSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutVitalSignsInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutVitalSignsInput>;
export const MedicalRecordsCreateNestedOneWithoutVitalSignsInputObjectZodSchema = makeSchema();
