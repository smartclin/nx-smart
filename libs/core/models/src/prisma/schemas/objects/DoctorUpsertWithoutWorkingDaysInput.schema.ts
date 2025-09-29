import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorUpdateWithoutWorkingDaysInputObjectSchema as DoctorUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUpdateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInput.schema';
import { DoctorCreateWithoutWorkingDaysInputObjectSchema as DoctorCreateWithoutWorkingDaysInputObjectSchema } from './DoctorCreateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutWorkingDaysInput>;
export const DoctorUpsertWithoutWorkingDaysInputObjectZodSchema = makeSchema();
