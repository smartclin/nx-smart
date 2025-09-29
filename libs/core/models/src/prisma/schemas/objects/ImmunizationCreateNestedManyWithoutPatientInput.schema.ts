import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ImmunizationCreateWithoutPatientInputObjectSchema as ImmunizationCreateWithoutPatientInputObjectSchema } from './ImmunizationCreateWithoutPatientInput.schema';
import { ImmunizationUncheckedCreateWithoutPatientInputObjectSchema as ImmunizationUncheckedCreateWithoutPatientInputObjectSchema } from './ImmunizationUncheckedCreateWithoutPatientInput.schema';
import { ImmunizationCreateOrConnectWithoutPatientInputObjectSchema as ImmunizationCreateOrConnectWithoutPatientInputObjectSchema } from './ImmunizationCreateOrConnectWithoutPatientInput.schema';
import { PatientImmunizationCreateManyPatientInputEnvelopeObjectSchema as ImmunizationCreateManyPatientInputEnvelopeObjectSchema } from './ImmunizationCreateManyPatientInputEnvelope.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './ImmunizationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImmunizationCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => ImmunizationCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImmunizationCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImmunizationWhereUniqueInputObjectSchema), z.lazy(() => ImmunizationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImmunizationCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.ImmunizationCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.ImmunizationCreateNestedManyWithoutPatientInput>;
export const ImmunizationCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
