import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesCreateWithoutLabtestsInputObjectSchema as ServicesCreateWithoutLabtestsInputObjectSchema } from './ServicesCreateWithoutLabtestsInput.schema';
import { ServicesUncheckedCreateWithoutLabtestsInputObjectSchema as ServicesUncheckedCreateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedCreateWithoutLabtestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServicesCreateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutLabtestsInputObjectSchema)])
}).strict();
export const ServicesCreateOrConnectWithoutLabtestsInputObjectSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutLabtestsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateOrConnectWithoutLabtestsInput>;
export const ServicesCreateOrConnectWithoutLabtestsInputObjectZodSchema = makeSchema();
