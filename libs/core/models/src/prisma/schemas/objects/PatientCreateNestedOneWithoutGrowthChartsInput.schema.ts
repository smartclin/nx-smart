import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutGrowthChartsInputObjectSchema as PatientCreateWithoutGrowthChartsInputObjectSchema } from './PatientCreateWithoutGrowthChartsInput.schema';
import { PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema as PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedCreateWithoutGrowthChartsInput.schema';
import { PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema as PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema } from './PatientCreateOrConnectWithoutGrowthChartsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional()
}).strict();
export const PatientCreateNestedOneWithoutGrowthChartsInputObjectSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutGrowthChartsInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientCreateNestedOneWithoutGrowthChartsInput>;
export const PatientCreateNestedOneWithoutGrowthChartsInputObjectZodSchema = makeSchema();
