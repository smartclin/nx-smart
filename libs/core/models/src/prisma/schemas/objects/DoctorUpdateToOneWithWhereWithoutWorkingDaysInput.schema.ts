import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutWorkingDaysInputObjectSchema as DoctorUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUpdateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutWorkingDaysInput>;
export const DoctorUpdateToOneWithWhereWithoutWorkingDaysInputObjectZodSchema = makeSchema();
