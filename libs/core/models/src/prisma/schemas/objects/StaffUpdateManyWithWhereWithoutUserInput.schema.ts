import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffScalarWhereInputObjectSchema as StaffScalarWhereInputObjectSchema } from './StaffScalarWhereInput.schema';
import { StaffUpdateManyMutationInputObjectSchema as StaffUpdateManyMutationInputObjectSchema } from './StaffUpdateManyMutationInput.schema';
import { StaffUncheckedUpdateManyWithoutUserInputObjectSchema as StaffUncheckedUpdateManyWithoutUserInputObjectSchema } from './StaffUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StaffUpdateManyMutationInputObjectSchema), z.lazy(() => StaffUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const StaffUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutUserInput>;
export const StaffUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
