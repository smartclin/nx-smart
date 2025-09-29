import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffCreateWithoutImmunizationsInputObjectSchema as StaffCreateWithoutImmunizationsInputObjectSchema } from './StaffCreateWithoutImmunizationsInput.schema';
import { StaffUncheckedCreateWithoutImmunizationsInputObjectSchema as StaffUncheckedCreateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedCreateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StaffCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutImmunizationsInputObjectSchema)])
}).strict();
export const StaffCreateOrConnectWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateOrConnectWithoutImmunizationsInput>;
export const StaffCreateOrConnectWithoutImmunizationsInputObjectZodSchema = makeSchema();
