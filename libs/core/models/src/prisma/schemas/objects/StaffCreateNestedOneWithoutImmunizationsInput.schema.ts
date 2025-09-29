import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutImmunizationsInputObjectSchema as StaffCreateWithoutImmunizationsInputObjectSchema } from './StaffCreateWithoutImmunizationsInput.schema';
import { StaffUncheckedCreateWithoutImmunizationsInputObjectSchema as StaffUncheckedCreateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedCreateWithoutImmunizationsInput.schema';
import { StaffCreateOrConnectWithoutImmunizationsInputObjectSchema as StaffCreateOrConnectWithoutImmunizationsInputObjectSchema } from './StaffCreateOrConnectWithoutImmunizationsInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutImmunizationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutImmunizationsInputObjectSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputObjectSchema).optional()
}).strict();
export const StaffCreateNestedOneWithoutImmunizationsInputObjectSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutImmunizationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateNestedOneWithoutImmunizationsInput>;
export const StaffCreateNestedOneWithoutImmunizationsInputObjectZodSchema = makeSchema();
