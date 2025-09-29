import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorScalarWhereInputObjectSchema as DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema';
import { DoctorUpdateManyMutationInputObjectSchema as DoctorUpdateManyMutationInputObjectSchema } from './DoctorUpdateManyMutationInput.schema';
import { DoctorUncheckedUpdateManyWithoutUserInputObjectSchema as DoctorUncheckedUpdateManyWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const DoctorUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutUserInput>;
export const DoctorUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
