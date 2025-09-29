import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutUserInputObjectSchema as StaffCreateWithoutUserInputObjectSchema } from './StaffCreateWithoutUserInput.schema';
import { StaffUncheckedCreateWithoutUserInputObjectSchema as StaffUncheckedCreateWithoutUserInputObjectSchema } from './StaffUncheckedCreateWithoutUserInput.schema';
import { StaffCreateOrConnectWithoutUserInputObjectSchema as StaffCreateOrConnectWithoutUserInputObjectSchema } from './StaffCreateOrConnectWithoutUserInput.schema';
import { StaffUpsertWithWhereUniqueWithoutUserInputObjectSchema as StaffUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StaffUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserStaffCreateManyUserInputEnvelopeObjectSchema as StaffCreateManyUserInputEnvelopeObjectSchema } from './StaffCreateManyUserInputEnvelope.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithWhereUniqueWithoutUserInputObjectSchema as StaffUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StaffUpdateWithWhereUniqueWithoutUserInput.schema';
import { StaffUpdateManyWithWhereWithoutUserInputObjectSchema as StaffUpdateManyWithWhereWithoutUserInputObjectSchema } from './StaffUpdateManyWithWhereWithoutUserInput.schema';
import { StaffScalarWhereInputObjectSchema as StaffScalarWhereInputObjectSchema } from './StaffScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutUserInputObjectSchema), z.lazy(() => StaffCreateWithoutUserInputObjectSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StaffCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => StaffCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StaffUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StaffUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StaffCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StaffUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => StaffUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StaffUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => StaffUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StaffUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.StaffUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateManyWithoutUserNestedInput>;
export const StaffUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
