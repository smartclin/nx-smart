import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationUpdateWithoutPatientInputObjectSchema as ImmunizationUpdateWithoutPatientInputObjectSchema } from './ImmunizationUpdateWithoutPatientInput.schema';
import { ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema as ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedUpdateWithoutPatientInput.schema';
import { ImmunizationCreateWithoutPatientInputObjectSchema as ImmunizationCreateWithoutPatientInputObjectSchema } from './ImmunizationCreateWithoutPatientInput.schema';
import { ImmunizationUncheckedCreateWithoutPatientInputObjectSchema as ImmunizationUncheckedCreateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImmunizationUpdateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedUpdateWithoutPatientInputObjectSchema)]),
  create: z.union([z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationUpsertWithWhereUniqueWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationUpsertWithWhereUniqueWithoutPatientInput>;
export const ImmunizationUpsertWithWhereUniqueWithoutPatientInputObjectZodSchema = makeSchema();
