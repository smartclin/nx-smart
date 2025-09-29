import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithoutServicesInputObjectSchema as LabTestUpdateWithoutServicesInputObjectSchema } from './LabTestUpdateWithoutServicesInput.schema';
import { LabTestUncheckedUpdateWithoutServicesInputObjectSchema as LabTestUncheckedUpdateWithoutServicesInputObjectSchema } from './LabTestUncheckedUpdateWithoutServicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LabTestUpdateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateWithoutServicesInputObjectSchema)])
}).strict();
export const LabTestUpdateWithWhereUniqueWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutServicesInput>;
export const LabTestUpdateWithWhereUniqueWithoutServicesInputObjectZodSchema = makeSchema();
