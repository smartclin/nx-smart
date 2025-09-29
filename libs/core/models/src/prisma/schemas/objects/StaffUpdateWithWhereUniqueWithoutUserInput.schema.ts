import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithoutUserInputObjectSchema as StaffUpdateWithoutUserInputObjectSchema } from './StaffUpdateWithoutUserInput.schema';
import { StaffUncheckedUpdateWithoutUserInputObjectSchema as StaffUncheckedUpdateWithoutUserInputObjectSchema } from './StaffUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StaffUpdateWithoutUserInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const StaffUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutUserInput>;
export const StaffUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
