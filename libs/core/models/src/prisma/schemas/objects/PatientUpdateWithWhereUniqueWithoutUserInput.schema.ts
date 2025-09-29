import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateWithoutUserInputObjectSchema as PatientUpdateWithoutUserInputObjectSchema } from './PatientUpdateWithoutUserInput.schema';
import { PatientUncheckedUpdateWithoutUserInputObjectSchema as PatientUncheckedUpdateWithoutUserInputObjectSchema } from './PatientUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PatientUpdateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PatientUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateWithWhereUniqueWithoutUserInput>;
export const PatientUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
