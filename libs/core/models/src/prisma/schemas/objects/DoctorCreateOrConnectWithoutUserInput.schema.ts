import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutUserInputObjectSchema as DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema';
import { DoctorUncheckedCreateWithoutUserInputObjectSchema as DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutUserInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutUserInput>;
export const DoctorCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
