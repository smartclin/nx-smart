import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithoutUserInputObjectSchema as StaffUpdateWithoutUserInputObjectSchema } from './StaffUpdateWithoutUserInput.schema';
import { StaffUncheckedUpdateWithoutUserInputObjectSchema as StaffUncheckedUpdateWithoutUserInputObjectSchema } from './StaffUncheckedUpdateWithoutUserInput.schema';
import { StaffCreateWithoutUserInputObjectSchema as StaffCreateWithoutUserInputObjectSchema } from './StaffCreateWithoutUserInput.schema';
import { StaffUncheckedCreateWithoutUserInputObjectSchema as StaffUncheckedCreateWithoutUserInputObjectSchema } from './StaffUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StaffUpdateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => StaffCreateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const StaffUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutUserInput>;
export const StaffUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
