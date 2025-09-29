import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutWorkingDaysInputObjectSchema as DoctorCreateWithoutWorkingDaysInputObjectSchema } from './DoctorCreateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutWorkingDaysInput>;
export const DoctorCreateOrConnectWithoutWorkingDaysInputObjectZodSchema = makeSchema();
