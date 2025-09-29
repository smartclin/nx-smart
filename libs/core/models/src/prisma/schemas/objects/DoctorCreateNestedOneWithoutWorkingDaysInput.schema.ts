import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { DoctorCreateWithoutWorkingDaysInputObjectSchema as DoctorCreateWithoutWorkingDaysInputObjectSchema } from './DoctorCreateWithoutWorkingDaysInput.schema';
import { DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema as DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInput.schema';
import { DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema as DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema } from './DoctorCreateOrConnectWithoutWorkingDaysInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutWorkingDaysInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorkingDaysInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutWorkingDaysInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutWorkingDaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutWorkingDaysInput>;
export const DoctorCreateNestedOneWithoutWorkingDaysInputObjectZodSchema = makeSchema();
