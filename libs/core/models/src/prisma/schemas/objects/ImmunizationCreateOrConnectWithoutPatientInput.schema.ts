import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema';
import { ImmunizationCreateWithoutPatientInputObjectSchema as ImmunizationCreateWithoutPatientInputObjectSchema } from './ImmunizationCreateWithoutPatientInput.schema';
import { ImmunizationUncheckedCreateWithoutPatientInputObjectSchema as ImmunizationUncheckedCreateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedCreateWithoutPatientInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImmunizationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema)])
}).strict();
export const ImmunizationCreateOrConnectWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateOrConnectWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateOrConnectWithoutPatientInput>;
export const ImmunizationCreateOrConnectWithoutPatientInputObjectZodSchema = makeSchema();
