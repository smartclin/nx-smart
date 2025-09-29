import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutUserInputObjectSchema as DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema';
import { DoctorUncheckedCreateWithoutUserInputObjectSchema as DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema';
import { DoctorCreateOrConnectWithoutUserInputObjectSchema as DoctorCreateOrConnectWithoutUserInputObjectSchema } from './DoctorCreateOrConnectWithoutUserInput.schema';
import { UserDoctorCreateManyUserInputEnvelopeObjectSchema as DoctorCreateManyUserInputEnvelopeObjectSchema } from './DoctorCreateManyUserInputEnvelope.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedManyWithoutUserInput>;
export const DoctorCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
