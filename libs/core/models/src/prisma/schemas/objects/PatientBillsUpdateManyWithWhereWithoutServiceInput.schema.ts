import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientBillsScalarWhereInputObjectSchema as PatientBillsScalarWhereInputObjectSchema } from './PatientBillsScalarWhereInput.schema';
import { PatientBillsUpdateManyMutationInputObjectSchema as PatientBillsUpdateManyMutationInputObjectSchema } from './PatientBillsUpdateManyMutationInput.schema';
import { PatientBillsUncheckedUpdateManyWithoutServiceInputObjectSchema as PatientBillsUncheckedUpdateManyWithoutServiceInputObjectSchema } from './PatientBillsUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientBillsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PatientBillsUpdateManyMutationInputObjectSchema), z.lazy(() => PatientBillsUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const PatientBillsUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutServiceInput>;
export const PatientBillsUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
