import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithoutUserInputObjectSchema as DoctorUpdateWithoutUserInputObjectSchema } from './DoctorUpdateWithoutUserInput.schema';
import { DoctorUncheckedUpdateWithoutUserInputObjectSchema as DoctorUncheckedUpdateWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateWithoutUserInput.schema';
import { DoctorCreateWithoutUserInputObjectSchema as DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema';
import { DoctorUncheckedCreateWithoutUserInputObjectSchema as DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorUpdateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DoctorUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutUserInput>;
export const DoctorUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
