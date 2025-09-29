import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationScalarWhereInputObjectSchema as ImmunizationScalarWhereInputObjectSchema } from './ImmunizationScalarWhereInput.schema';
import { ImmunizationUpdateManyMutationInputObjectSchema as ImmunizationUpdateManyMutationInputObjectSchema } from './ImmunizationUpdateManyMutationInput.schema';
import { ImmunizationUncheckedUpdateManyWithoutPatientInputObjectSchema as ImmunizationUncheckedUpdateManyWithoutPatientInputObjectSchema } from './ImmunizationUncheckedUpdateManyWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImmunizationUpdateManyMutationInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateManyWithoutPatientInputObjectSchema)])
}).strict();
export const ImmunizationUpdateManyWithWhereWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateManyWithWhereWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateManyWithWhereWithoutPatientInput>;
export const ImmunizationUpdateManyWithWhereWithoutPatientInputObjectZodSchema = makeSchema();
