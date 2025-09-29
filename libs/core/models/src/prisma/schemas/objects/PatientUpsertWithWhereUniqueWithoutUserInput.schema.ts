import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateWithoutUserInputObjectSchema as PatientUpdateWithoutUserInputObjectSchema } from './PatientUpdateWithoutUserInput.schema';
import { PatientUncheckedUpdateWithoutUserInputObjectSchema as PatientUncheckedUpdateWithoutUserInputObjectSchema } from './PatientUncheckedUpdateWithoutUserInput.schema';
import { PatientCreateWithoutUserInputObjectSchema as PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema';
import { PatientUncheckedCreateWithoutUserInputObjectSchema as PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PatientUpdateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PatientCreateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PatientUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpsertWithWhereUniqueWithoutUserInput>;
export const PatientUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
