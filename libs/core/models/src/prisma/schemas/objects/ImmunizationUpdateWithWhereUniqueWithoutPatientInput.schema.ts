import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithoutPatientInputObjectSchema as ImmunizationUpdateWithoutPatientInputObjectSchema } from './ImmunizationUpdateWithoutPatientInput.schema';
import { ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema as ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedUpdateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImmunizationUpdateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema)])
}).strict();
export const ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationUpdateWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpdateWithWhereUniqueWithoutPatientInput>;
export const ImmunizationUpdateWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
