import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema';
import { StaffUpdateWithoutImmunizationsInputObjectSchema as StaffUpdateWithoutImmunizationsInputObjectSchema } from './StaffUpdateWithoutImmunizationsInput.schema';
import { StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema as StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedUpdateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StaffUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema)])
}).strict();
export const StaffUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutImmunizationsInput>;
export const StaffUpdateToOneWithWhereWithoutImmunizationsInputObjectZodSchema = makeSchema();
