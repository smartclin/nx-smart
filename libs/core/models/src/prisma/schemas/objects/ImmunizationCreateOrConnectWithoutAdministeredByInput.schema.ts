import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationCreateWithoutAdministeredByInputObjectSchema as ImmunizationCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedCreateWithoutAdministeredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema)])
}).strict();
export const ImmunizationCreateOrConnectWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateOrConnectWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateOrConnectWithoutAdministeredByInput>;
export const ImmunizationCreateOrConnectWithoutAdministeredByInputObjectZodSchema = makeSchema();
