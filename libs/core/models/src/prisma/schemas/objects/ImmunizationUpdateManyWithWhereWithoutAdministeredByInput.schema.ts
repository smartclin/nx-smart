import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationScalarWhereInputObjectSchema as ImmunizationScalarWhereInputObjectSchema } from './ImmunizationScalarWhereInput.schema';
import { ImmunizationUpdateManyMutationInputObjectSchema as ImmunizationUpdateManyMutationInputObjectSchema } from './ImmunizationUpdateManyMutationInput.schema';
import { ImmunizationUncheckedUpdateManyWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedUpdateManyWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedUpdateManyWithoutAdministeredByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImmunizationUpdateManyMutationInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateManyWithoutAdministeredByInputObjectSchema)])
}).strict();
export const ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateManyWithWhereWithoutAdministeredByInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateManyWithWhereWithoutAdministeredByInput>;
export const ImmunizationUpdateManyWithWhereWithoutAdministeredByInputObjectZodSchema = makeSchema();
