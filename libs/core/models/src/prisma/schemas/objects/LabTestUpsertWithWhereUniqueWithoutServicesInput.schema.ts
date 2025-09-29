import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithoutServicesInputObjectSchema as LabTestUpdateWithoutServicesInputObjectSchema } from './LabTestUpdateWithoutServicesInput.schema';
import { LabTestUncheckedUpdateWithoutServicesInputObjectSchema as LabTestUncheckedUpdateWithoutServicesInputObjectSchema } from './LabTestUncheckedUpdateWithoutServicesInput.schema';
import { LabTestCreateWithoutServicesInputObjectSchema as LabTestCreateWithoutServicesInputObjectSchema } from './LabTestCreateWithoutServicesInput.schema';
import { LabTestUncheckedCreateWithoutServicesInputObjectSchema as LabTestUncheckedCreateWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateWithoutServicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LabTestUpdateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedUpdateWithoutServicesInputObjectSchema)]),
  create: z.union([z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema)])
}).strict();
export const LabTestUpsertWithWhereUniqueWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutServicesInput>;
export const LabTestUpsertWithWhereUniqueWithoutServicesInputObjectZodSchema = makeSchema();
