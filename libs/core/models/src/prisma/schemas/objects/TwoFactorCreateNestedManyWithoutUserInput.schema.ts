import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { TwoFactorCreateWithoutUserInputObjectSchema as TwoFactorCreateWithoutUserInputObjectSchema } from './TwoFactorCreateWithoutUserInput.schema';
import { TwoFactorUncheckedCreateWithoutUserInputObjectSchema as TwoFactorUncheckedCreateWithoutUserInputObjectSchema } from './TwoFactorUncheckedCreateWithoutUserInput.schema';
import { TwoFactorCreateOrConnectWithoutUserInputObjectSchema as TwoFactorCreateOrConnectWithoutUserInputObjectSchema } from './TwoFactorCreateOrConnectWithoutUserInput.schema';
import { UserTwoFactorCreateManyUserInputEnvelopeObjectSchema as TwoFactorCreateManyUserInputEnvelopeObjectSchema } from './TwoFactorCreateManyUserInputEnvelope.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './TwoFactorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TwoFactorUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TwoFactorCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TwoFactorCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TwoFactorWhereUniqueInputObjectSchema), z.lazy(() => TwoFactorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TwoFactorCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorCreateNestedManyWithoutUserInput>;
export const TwoFactorCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
