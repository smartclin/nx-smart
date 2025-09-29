import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientCreateWithoutUserInputObjectSchema as PatientCreateWithoutUserInputObjectSchema } from './PatientCreateWithoutUserInput.schema';
import { PatientUncheckedCreateWithoutUserInputObjectSchema as PatientUncheckedCreateWithoutUserInputObjectSchema } from './PatientUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PatientCreateWithoutUserInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PatientCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateOrConnectWithoutUserInput>;
export const PatientCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
