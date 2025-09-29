import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutImmunizationsInputObjectSchema as PatientCreateWithoutImmunizationsInputObjectSchema } from './PatientCreateWithoutImmunizationsInput.schema';
import { PatientUncheckedCreateWithoutImmunizationsInputObjectSchema as PatientUncheckedCreateWithoutImmunizationsInputObjectSchema } from './PatientUncheckedCreateWithoutImmunizationsInput.schema';
import { PatientCreateOrConnectWithoutImmunizationsInputObjectSchema as PatientCreateOrConnectWithoutImmunizationsInputObjectSchema } from './PatientCreateOrConnectWithoutImmunizationsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutImmunizationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutImmunizationsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutImmunizationsInput>;
export const PatientCreateNestedOneWithoutImmunizationsInputObjectZodSchema = makeSchema();
