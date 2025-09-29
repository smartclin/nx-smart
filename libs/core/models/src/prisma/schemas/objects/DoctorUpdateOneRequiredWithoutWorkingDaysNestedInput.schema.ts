import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutWorkingDaysInputObjectSchema as DoctorCreateWithoutWorkingDaysInputObjectSchema } from './DoctorCreateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInput.schema';
import { DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema as DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema } from './DoctorCreateOrConnectWithoutWorkingDaysInput.schema';
import { DoctorUpsertWithoutWorkingDaysInputObjectSchema as DoctorUpsertWithoutWorkingDaysInputObjectSchema } from './DoctorUpsertWithoutWorkingDaysInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutWorkingDaysInputObjectSchema as DoctorUpdateToOneWithWhereWithoutWorkingDaysInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutWorkingDaysInput.schema';
import { DoctorUpdateWithoutWorkingDaysInputObjectSchema as DoctorUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUpdateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutWorkingDaysInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUpdateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutWorkingDaysNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutWorkingDaysNestedInput>;
export const DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputObjectZodSchema = makeSchema();
