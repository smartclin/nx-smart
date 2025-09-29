import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { ServicesUpdateWithoutLabtestsInputObjectSchema as ServicesUpdateWithoutLabtestsInputObjectSchema } from './ServicesUpdateWithoutLabtestsInput.schema';
import { ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema as ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedUpdateWithoutLabtestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServicesUpdateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema)])
}).strict();
export const ServicesUpdateToOneWithWhereWithoutLabtestsInputObjectSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutLabtestsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutLabtestsInput>;
export const ServicesUpdateToOneWithWhereWithoutLabtestsInputObjectZodSchema = makeSchema();
