import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutImmunizationsInputObjectSchema as PatientCreateWithoutImmunizationsInputObjectSchema } from './PatientCreateWithoutImmunizationsInput.schema';
import { PatientUncheckedCreateWithoutImmunizationsInputObjectSchema as PatientUncheckedCreateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedCreateWithoutImmunizationsInput.schema';
import { PatientCreateOrConnectWithoutImmunizationsInputObjectSchema as PatientCreateOrConnectWithoutImmunizationsInputObjectSchema } from './PatientCreateOrConnectWithoutImmunizationsInput.schema';
import { PatientUpsertWithoutImmunizationsInputObjectSchema as PatientUpsertWithoutImmunizationsInputObjectSchema } from './PatientUpsertWithoutImmunizationsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema as PatientUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutImmunizationsInput.schema';
import { PatientUpdateWithoutImmunizationsInputObjectSchema as PatientUpdateWithoutImmunizationsInputObjectSchema } from './PatientUpdateWithoutImmunizationsInput.schema';
import { PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema as PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedUpdateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutImmunizationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutImmunizationsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutImmunizationsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutImmunizationsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutImmunizationsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutImmunizationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutImmunizationsNestedInput>;
export const PatientUpdateOneRequiredWithoutImmunizationsNestedInputObjectZodSchema = makeSchema();
