import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { PatientCreateWithoutGrowthChartsInputObjectSchema as PatientCreateWithoutGrowthChartsInputObjectSchema } from './PatientCreateWithoutGrowthChartsInput.schema';
import { PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema as PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedCreateWithoutGrowthChartsInput.schema';
import { PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema as PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema } from './PatientCreateOrConnectWithoutGrowthChartsInput.schema';
import { PatientUpsertWithoutGrowthChartsInputObjectSchema as PatientUpsertWithoutGrowthChartsInputObjectSchema } from './PatientUpsertWithoutGrowthChartsInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema';
import { PatientUpdateToOneWithWhereWithoutGrowthChartsInputObjectSchema as PatientUpdateToOneWithWhereWithoutGrowthChartsInputObjectSchema } from './PatientUpdateToOneWithWhereWithoutGrowthChartsInput.schema';
import { PatientUpdateWithoutGrowthChartsInputObjectSchema as PatientUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUpdateWithoutGrowthChartsInput.schema';
import { PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema as PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema } from './PatientUncheckedUpdateWithoutGrowthChartsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PatientCreateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedCreateWithoutGrowthChartsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutGrowthChartsInputObjectSchema).optional(),
  upsert: z.lazy(() => PatientUpsertWithoutGrowthChartsInputObjectSchema).optional(),
  connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PatientUpdateToOneWithWhereWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUpdateWithoutGrowthChartsInputObjectSchema), z.lazy(() => PatientUncheckedUpdateWithoutGrowthChartsInputObjectSchema)]).optional()
}).strict();
export const PatientUpdateOneRequiredWithoutGrowthChartsNestedInputObjectSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutGrowthChartsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PatientUpdateOneRequiredWithoutGrowthChartsNestedInput>;
export const PatientUpdateOneRequiredWithoutGrowthChartsNestedInputObjectZodSchema = makeSchema();
