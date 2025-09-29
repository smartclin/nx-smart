import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffUpdateWithoutImmunizationsInputObjectSchema as StaffUpdateWithoutImmunizationsInputObjectSchema } from './StaffUpdateWithoutImmunizationsInput.schema';
import { StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema as StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedUpdateWithoutImmunizationsInput.schema';
import { StaffCreateWithoutImmunizationsInputObjectSchema as StaffCreateWithoutImmunizationsInputObjectSchema } from './StaffCreateWithoutImmunizationsInput.schema';
import { StaffUncheckedCreateWithoutImmunizationsInputObjectSchema as StaffUncheckedCreateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedCreateWithoutImmunizationsInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StaffUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema)]),
  create: z.union([z.lazy(() => StaffCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutImmunizationsInputObjectSchema)]),
  where: z.lazy(() => StaffWhereInputObjectSchema).optional()
}).strict();
export const StaffUpsertWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.StaffUpsertWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpsertWithoutImmunizationsInput>;
export const StaffUpsertWithoutImmunizationsInputObjectZodSchema = makeSchema();
