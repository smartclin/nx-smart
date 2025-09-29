import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { GrowthChartCreateWithoutPatientInputObjectSchema as GrowthChartCreateWithoutPatientInputObjectSchema } from './GrowthChartCreateWithoutPatientInput.schema';
import { GrowthChartUncheckedCreateWithoutPatientInputObjectSchema as GrowthChartUncheckedCreateWithoutPatientInputObjectSchema } from './GrowthChartUncheckedCreateWithoutPatientInput.schema';
import { GrowthChartCreateOrConnectWithoutPatientInputObjectSchema as GrowthChartCreateOrConnectWithoutPatientInputObjectSchema } from './GrowthChartCreateOrConnectWithoutPatientInput.schema';
import { PatientGrowthChartCreateManyPatientInputEnvelopeObjectSchema as GrowthChartCreateManyPatientInputEnvelopeObjectSchema } from './GrowthChartCreateManyPatientInputEnvelope.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './GrowthChartWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartCreateWithoutPatientInputObjectSchema).array(), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartUncheckedCreateWithoutPatientInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GrowthChartCreateOrConnectWithoutPatientInputObjectSchema), z.lazy(() => GrowthChartCreateOrConnectWithoutPatientInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GrowthChartCreateManyPatientInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GrowthChartWhereUniqueInputObjectSchema), z.lazy(() => GrowthChartWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GrowthChartCreateNestedManyWithoutPatientInputObjectSchema: z.ZodType<Prisma.GrowthChartCreateNestedManyWithoutPatientInput> = makeSchema() as unknown as z.ZodType<Prisma.GrowthChartCreateNestedManyWithoutPatientInput>;
export const GrowthChartCreateNestedManyWithoutPatientInputObjectZodSchema = makeSchema();
