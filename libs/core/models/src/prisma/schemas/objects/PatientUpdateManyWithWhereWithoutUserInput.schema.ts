import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientScalarWhereInputObjectSchema as PatientScalarWhereInputObjectSchema } from './PatientScalarWhereInput.schema';
import { PatientUpdateManyMutationInputObjectSchema as PatientUpdateManyMutationInputObjectSchema } from './PatientUpdateManyMutationInput.schema';
import { PatientUncheckedUpdateManyWithoutUserInputObjectSchema as PatientUncheckedUpdateManyWithoutUserInputObjectSchema } from './PatientUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PatientUpdateManyMutationInputObjectSchema), z.lazy(() => PatientUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PatientUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateManyWithWhereWithoutUserInput>;
export const PatientUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
