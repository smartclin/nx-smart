import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationCreateWithoutAdministeredByInputObjectSchema as ImmunizationCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedCreateWithoutAdministeredByInput.schema';
import { ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema as ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateOrConnectWithoutAdministeredByInput.schema';
import { AdministeredByImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema as ImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema } from './ImmunizationCreateManyAdministeredByInputEnvelope.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema).array(), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImmunizationCreateManyAdministeredByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInput>;
export const ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInputObjectZodSchema = makeSchema();
