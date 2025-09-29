import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StaffCreateWithoutImmunizationsInputObjectSchema as StaffCreateWithoutImmunizationsInputObjectSchema } from './StaffCreateWithoutImmunizationsInput.schema';
import { StaffUncheckedCreateWithoutImmunizationsInputObjectSchema as StaffUncheckedCreateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedCreateWithoutImmunizationsInput.schema';
import { StaffCreateOrConnectWithoutImmunizationsInputObjectSchema as StaffCreateOrConnectWithoutImmunizationsInputObjectSchema } from './StaffCreateOrConnectWithoutImmunizationsInput.schema';
import { StaffUpsertWithoutImmunizationsInputObjectSchema as StaffUpsertWithoutImmunizationsInputObjectSchema } from './StaffUpsertWithoutImmunizationsInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema as StaffUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema } from './StaffUpdateToOneWithWhereWithoutImmunizationsInput.schema';
import { StaffUpdateWithoutImmunizationsInputObjectSchema as StaffUpdateWithoutImmunizationsInputObjectSchema } from './StaffUpdateWithoutImmunizationsInput.schema';
import { StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema as StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema } from './StaffUncheckedUpdateWithoutImmunizationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutImmunizationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutImmunizationsInputObjectSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutImmunizationsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StaffWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StaffWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StaffUpdateToOneWithWhereWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUpdateWithoutImmunizationsInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutImmunizationsInputObjectSchema)]).optional()
}).strict();
export const StaffUpdateOneWithoutImmunizationsNestedInputObjectSchema: z.ZodType<Prisma.StaffUpdateOneWithoutImmunizationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateOneWithoutImmunizationsNestedInput>;
export const StaffUpdateOneWithoutImmunizationsNestedInputObjectZodSchema = makeSchema();
