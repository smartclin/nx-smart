import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestScalarWhereInputObjectSchema as LabTestScalarWhereInputObjectSchema } from './LabTestScalarWhereInput.schema';
import { LabTestUpdateManyMutationInputObjectSchema as LabTestUpdateManyMutationInputObjectSchema } from './LabTestUpdateManyMutationInput.schema';
import { LabTestUncheckedUpdateManyWithoutServicesInputObjectSchema as LabTestUncheckedUpdateManyWithoutServicesInputObjectSchema } from './LabTestUncheckedUpdateManyWithoutServicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LabTestUpdateManyMutationInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateManyWithoutServicesInputObjectSchema)])
}).strict();
export const LabTestUpdateManyWithWhereWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutServicesInput>;
export const LabTestUpdateManyWithWhereWithoutServicesInputObjectZodSchema = makeSchema();
