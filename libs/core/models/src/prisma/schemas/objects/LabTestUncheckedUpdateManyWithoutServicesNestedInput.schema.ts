import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { LabTestCreateWithoutServicesInputObjectSchema as LabTestCreateWithoutServicesInputObjectSchema } from './LabTestCreateWithoutServicesInput.schema';
import { LabTestUncheckedCreateWithoutServicesInputObjectSchema as LabTestUncheckedCreateWithoutServicesInputObjectSchema } from './LabTestUncheckedCreateWithoutServicesInput.schema';
import { LabTestCreateOrConnectWithoutServicesInputObjectSchema as LabTestCreateOrConnectWithoutServicesInputObjectSchema } from './LabTestCreateOrConnectWithoutServicesInput.schema';
import { LabTestUpsertWithWhereUniqueWithoutServicesInputObjectSchema as LabTestUpsertWithWhereUniqueWithoutServicesInputObjectSchema } from './LabTestUpsertWithWhereUniqueWithoutServicesInput.schema';
import { ServicesLabTestCreateManyServicesInputEnvelopeObjectSchema as LabTestCreateManyServicesInputEnvelopeObjectSchema } from './LabTestCreateManyServicesInputEnvelope.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './LabTestWhereUniqueInput.schema';
import { LabTestUpdateWithWhereUniqueWithoutServicesInputObjectSchema as LabTestUpdateWithWhereUniqueWithoutServicesInputObjectSchema } from './LabTestUpdateWithWhereUniqueWithoutServicesInput.schema';
import { LabTestUpdateManyWithWhereWithoutServicesInputObjectSchema as LabTestUpdateManyWithWhereWithoutServicesInputObjectSchema } from './LabTestUpdateManyWithWhereWithoutServicesInput.schema';
import { LabTestScalarWhereInputObjectSchema as LabTestScalarWhereInputObjectSchema } from './LabTestScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestCreateWithoutServicesInputObjectSchema).array(), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema), z.lazy(() => LabTestUncheckedCreateWithoutServicesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LabTestCreateOrConnectWithoutServicesInputObjectSchema), z.lazy(() => LabTestCreateOrConnectWithoutServicesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LabTestUpsertWithWhereUniqueWithoutServicesInputObjectSchema), z.lazy(() => LabTestUpsertWithWhereUniqueWithoutServicesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LabTestCreateManyServicesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LabTestWhereUniqueInputObjectSchema), z.lazy(() => LabTestWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LabTestUpdateWithWhereUniqueWithoutServicesInputObjectSchema), z.lazy(() => LabTestUpdateWithWhereUniqueWithoutServicesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LabTestUpdateManyWithWhereWithoutServicesInputObjectSchema), z.lazy(() => LabTestUpdateManyWithWhereWithoutServicesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LabTestScalarWhereInputObjectSchema), z.lazy(() => LabTestScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LabTestUncheckedUpdateManyWithoutServicesNestedInputObjectSchema: z.ZodType<Prisma.LabTestUncheckedUpdateManyWithoutServicesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LabTestUncheckedUpdateManyWithoutServicesNestedInput>;
export const LabTestUncheckedUpdateManyWithoutServicesNestedInputObjectZodSchema = makeSchema();
