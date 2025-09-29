import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithoutAdministeredByInputObjectSchema as ImmunizationUpdateWithoutAdministeredByInputObjectSchema } from './ImmunizationUpdateWithoutAdministeredByInput.schema';
import { ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedUpdateWithoutAdministeredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImmunizationUpdateWithoutAdministeredByInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateWithoutAdministeredByInputObjectSchema)])
}).strict();
export const ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInput>;
export const ImmunizationUpdateWithWhereUniqueWithoutAdministeredByInputObjectZodSchema = makeSchema();
