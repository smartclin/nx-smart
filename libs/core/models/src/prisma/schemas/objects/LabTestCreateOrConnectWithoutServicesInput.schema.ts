import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestCreateWithoutServicesInputObjectSchema as LabTestCreateWithoutServicesInputObjectSchema } from './LabTestCreateWithoutServicesInput.schema';
import { LabTestUncheckedCreateWithoutServicesInputObjectSchema as LabTestUncheckedCreateWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateWithoutServicesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LabTestWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema)])
}).strict();
export const LabTestCreateOrConnectWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestCreateOrConnectWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateOrConnectWithoutServicesInput>;
export const LabTestCreateOrConnectWithoutServicesInputObjectZodSchema = makeSchema();
