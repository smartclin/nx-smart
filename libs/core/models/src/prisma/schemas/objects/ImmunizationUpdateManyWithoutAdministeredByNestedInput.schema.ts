import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationCreateWithoutAdministeredByInputObjectSchema as ImmunizationCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedCreateWithoutAdministeredByInput.schema';
import { ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema as ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateOrConnectWithoutAdministeredByInput.schema';
import { ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectSchema as ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectSchema } from './ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInput.schema';
import { AdministeredByImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema as ImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema } from './ImmunizationCreateManyAdministeredByInputEnvelope.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectSchema as ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectSchema } from './ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInput.schema';
import { ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectSchema as ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectSchema } from './ImmunizationUpdateManyWithWhereWithoutAdministeredByInput.schema';
import { ImmunizationScalarWhereInputObjectSchema as ImmunizationScalarWhereInputObjectSchema } from './ImmunizationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema).array(), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImmunizationScalarWhereInputObjectSchema), z.lazy(() => ImmunizationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImmunizationUpdateManyWithoutAdministeredByNestedInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateManyWithoutAdministeredByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateManyWithoutAdministeredByNestedInput>;
export const ImmunizationUpdateManyWithoutAdministeredByNestedInputObjectZodSchema = makeSchema();
