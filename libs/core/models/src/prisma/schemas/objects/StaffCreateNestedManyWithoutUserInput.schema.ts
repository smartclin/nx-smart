import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutUserInputObjectSchema as StaffCreateWithoutUserInputObjectSchema } from './StaffCreateWithoutUserInput.schema';
import { StaffUncheckedCreateWithoutUserInputObjectSchema as StaffUncheckedCreateWithoutUserInputObjectSchema } from './StaffUncheckedCreateWithoutUserInput.schema';
import { StaffCreateOrConnectWithoutUserInputObjectSchema as StaffCreateOrConnectWithoutUserInputObjectSchema } from './StaffCreateOrConnectWithoutUserInput.schema';
import { UserStaffCreateManyUserInputEnvelopeObjectSchema as StaffCreateManyUserInputEnvelopeObjectSchema } from './StaffCreateManyUserInputEnvelope.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutUserInputObjectSchema), z.lazy(() => StaffCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StaffCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StaffCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StaffCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StaffCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.StaffCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateNestedManyWithoutUserInput>;
export const StaffCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
