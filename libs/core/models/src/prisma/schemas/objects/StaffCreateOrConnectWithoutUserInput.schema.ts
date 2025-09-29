import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffCreateWithoutUserInputObjectSchema as StaffCreateWithoutUserInputObjectSchema } from './StaffCreateWithoutUserInput.schema';
import { StaffUncheckedCreateWithoutUserInputObjectSchema as StaffUncheckedCreateWithoutUserInputObjectSchema } from './StaffUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StaffCreateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StaffCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateOrConnectWithoutUserInput>;
export const StaffCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
