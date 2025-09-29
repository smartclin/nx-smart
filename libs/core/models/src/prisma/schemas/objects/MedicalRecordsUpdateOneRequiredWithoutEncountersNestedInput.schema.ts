import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { MedicalRecordsCreateWithoutEncountersInputObjectSchema as MedicalRecordsCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedCreateWithoutEncountersInput.schema';
import { MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema as MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema } from './MedicalRecordsCreateOrConnectWithoutEncountersInput.schema';
import { MedicalRecordsUpsertWithoutEncountersInputObjectSchema as MedicalRecordsUpsertWithoutEncountersInputObjectSchema } from './MedicalRecordsUpsertWithoutEncountersInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsUpdateToOneWithWhereWithoutEncountersInputObjectSchema as MedicalRecordsUpdateToOneWithWhereWithoutEncountersInputObjectSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutEncountersInput.schema';
import { MedicalRecordsUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUpdateWithoutEncountersInput.schema';
import { MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema as MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema } from './MedicalRecordsUncheckedUpdateWithoutEncountersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MedicalRecordsCreateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedCreateWithoutEncountersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MedicalRecordsCreateOrConnectWithoutEncountersInputObjectSchema).optional(),
  upsert: z.lazy(() => MedicalRecordsUpsertWithoutEncountersInputObjectSchema).optional(),
  connect: z.lazy(() => MedicalRecordsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUpdateWithoutEncountersInputObjectSchema), z.lazy(() => MedicalRecordsUncheckedUpdateWithoutEncountersInputObjectSchema)]).optional()
}).strict();
export const MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInputObjectSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInput>;
export const MedicalRecordsUpdateOneRequiredWithoutEncountersNestedInputObjectZodSchema = makeSchema();
