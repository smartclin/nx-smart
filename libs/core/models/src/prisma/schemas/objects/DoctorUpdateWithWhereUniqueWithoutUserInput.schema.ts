import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithoutUserInputObjectSchema as DoctorUpdateWithoutUserInputObjectSchema } from './DoctorUpdateWithoutUserInput.schema';
import { DoctorUncheckedUpdateWithoutUserInputObjectSchema as DoctorUncheckedUpdateWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorUpdateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const DoctorUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutUserInput>;
export const DoctorUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
