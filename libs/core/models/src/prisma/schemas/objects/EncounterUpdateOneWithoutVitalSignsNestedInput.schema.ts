import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { EncounterCreateWithoutVitalSignsInputObjectSchema as EncounterCreateWithoutVitalSignsInputObjectSchema } from './EncounterCreateWithoutVitalSignsInput.schema';
import { EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema as EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedCreateWithoutVitalSignsInput.schema';
import { EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema as EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema } from './EncounterCreateOrConnectWithoutVitalSignsInput.schema';
import { EncounterUpsertWithoutVitalSignsInputObjectSchema as EncounterUpsertWithoutVitalSignsInputObjectSchema } from './EncounterUpsertWithoutVitalSignsInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './EncounterWhereInput.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './EncounterWhereUniqueInput.schema';
import { EncounterUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema as EncounterUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema } from './EncounterUpdateToOneWithWhereWithoutVitalSignsInput.schema';
import { EncounterUpdateWithoutVitalSignsInputObjectSchema as EncounterUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUpdateWithoutVitalSignsInput.schema';
import { EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema as EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema } from './EncounterUncheckedUpdateWithoutVitalSignsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EncounterCreateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedCreateWithoutVitalSignsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EncounterCreateOrConnectWithoutVitalSignsInputObjectSchema).optional(),
  upsert: z.lazy(() => EncounterUpsertWithoutVitalSignsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EncounterWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EncounterWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EncounterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EncounterUpdateToOneWithWhereWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUpdateWithoutVitalSignsInputObjectSchema), z.lazy(() => EncounterUncheckedUpdateWithoutVitalSignsInputObjectSchema)]).optional()
}).strict();
export const EncounterUpdateOneWithoutVitalSignsNestedInputObjectSchema: z.ZodType<Prisma.EncounterUpdateOneWithoutVitalSignsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EncounterUpdateOneWithoutVitalSignsNestedInput>;
export const EncounterUpdateOneWithoutVitalSignsNestedInputObjectZodSchema = makeSchema();
