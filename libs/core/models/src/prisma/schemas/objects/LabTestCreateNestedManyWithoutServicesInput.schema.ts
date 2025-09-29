import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestCreateWithoutServicesInputObjectSchema as LabTestCreateWithoutServicesInputObjectSchema } from './LabTestCreateWithoutServicesInput.schema';
import { LabTestUncheckedCreateWithoutServicesInputObjectSchema as LabTestUncheckedCreateWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateWithoutServicesInput.schema';
import { LabTestCreateOrConnectWithoutServicesInputObjectSchema as LabTestCreateOrConnectWithoutServicesInputObjectSchema } from './LabTestCreateOrConnectWithoutServicesInput.schema';
import { ServicesLabTestCreateManyServicesInputEnvelopeObjectSchema as LabTestCreateManyServicesInputEnvelopeObjectSchema } from './LabTestCreateManyServicesInputEnvelope.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema).array(), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LabTestCreateOrConnectWithoutServicesInputObjectSchema), z.lazy(() => LabTestCreateOrConnectWithoutServicesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LabTestCreateManyServicesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LabTestCreateNestedManyWithoutServicesInputObjectSchema: z.ZodType<Prisma.LabTestCreateNestedManyWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestCreateNestedManyWithoutServicesInput>;
export const LabTestCreateNestedManyWithoutServicesInputObjectZodSchema = makeSchema();
