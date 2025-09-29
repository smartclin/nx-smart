import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutUserInputObjectSchema as PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema';
import { PatientUncheckedCreateWithoutUserInputObjectSchema as PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema';
import { PatientCreateOrConnectWithoutUserInputObjectSchema as PatientCreateOrConnectWithoutUserInputObjectSchema } from './PatientCreateOrConnectWithoutUserInput.schema';
import { UserPatientCreateManyUserInputEnvelopeObjectSchema as PatientCreateManyUserInputEnvelopeObjectSchema } from './PatientCreateManyUserInputEnvelope.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutUserInputObjectSchema), z.lazy(() => PatientCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PatientCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PatientCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PatientCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PatientWhereUniqueInputObjectSchema), z.lazy(() => PatientWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PatientCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedManyWithoutUserInput>;
export const PatientCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
