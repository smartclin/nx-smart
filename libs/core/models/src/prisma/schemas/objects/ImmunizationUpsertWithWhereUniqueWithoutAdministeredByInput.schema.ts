import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithoutAdministeredByInputObjectSchema as ImmunizationUpdateWithoutAdministeredByInputObjectSchema } from './ImmunizationUpdateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedUpdateWithoutAdministeredByInput.schema';
import { ImmunizationCreateWithoutAdministeredByInputObjectSchema as ImmunizationCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationCreateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedCreateWithoutAdministeredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImmunizationUpdateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema)]),
  create: z.union([z.lazy(() => ImmunizationCreateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutAdministeredByInputObjectSchema)])
}).strict();
export const ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInput>;
export const ImmunizationUpsertWithWhereUniqueWithoutAdministeredByInputObjectZodSchema = makeSchema();
