import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesUpdateWithoutLabtestsInputObjectSchema as ServicesUpdateWithoutLabtestsInputObjectSchema } from './ServicesUpdateWithoutLabtestsInput.schema';
import { ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema as ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedUpdateWithoutLabtestsInput.schema';
import { ServicesCreateWithoutLabtestsInputObjectSchema as ServicesCreateWithoutLabtestsInputObjectSchema } from './ServicesCreateWithoutLabtestsInput.schema';
import { ServicesUncheckedCreateWithoutLabtestsInputObjectSchema as ServicesUncheckedCreateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedCreateWithoutLabtestsInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServicesUpdateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema)]),
  create: z.union([z.lazy(() => ServicesCreateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutLabtestsInputObjectSchema)]),
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional()
}).strict();
export const ServicesUpsertWithoutLabtestsInputObjectSchema: z.ZodType<Prisma.ServicesUpsertWithoutLabtestsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpsertWithoutLabtestsInput>;
export const ServicesUpsertWithoutLabtestsInputObjectZodSchema = makeSchema();
