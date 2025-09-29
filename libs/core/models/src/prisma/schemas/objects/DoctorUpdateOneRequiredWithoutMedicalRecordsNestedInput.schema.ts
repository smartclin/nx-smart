import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutMedicalRecordsInputObjectSchema as DoctorCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedCreateWithoutMedicalRecordsInput.schema';
import { DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema as DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema } from './DoctorCreateOrConnectWithoutMedicalRecordsInput.schema';
import { DoctorUpsertWithoutMedicalRecordsInputObjectSchema as DoctorUpsertWithoutMedicalRecordsInputObjectSchema } from './DoctorUpsertWithoutMedicalRecordsInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutMedicalRecordsInputObjectSchema as DoctorUpdateToOneWithWhereWithoutMedicalRecordsInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput.schema';
import { DoctorUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUpdateWithoutMedicalRecordsInput.schema';
import { DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema as DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema } from './DoctorUncheckedUpdateWithoutMedicalRecordsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutMedicalRecordsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutMedicalRecordsInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutMedicalRecordsInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUpdateWithoutMedicalRecordsInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutMedicalRecordsInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput>;
export const DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInputObjectZodSchema = makeSchema();
