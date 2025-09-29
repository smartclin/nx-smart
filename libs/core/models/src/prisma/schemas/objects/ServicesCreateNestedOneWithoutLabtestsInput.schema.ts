import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutLabtestsInputObjectSchema as ServicesCreateWithoutLabtestsInputObjectSchema } from './ServicesCreateWithoutLabtestsInput.schema';
import { ServicesUncheckedCreateWithoutLabtestsInputObjectSchema as ServicesUncheckedCreateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedCreateWithoutLabtestsInput.schema';
import { ServicesCreateOrConnectWithoutLabtestsInputObjectSchema as ServicesCreateOrConnectWithoutLabtestsInputObjectSchema } from './ServicesCreateOrConnectWithoutLabtestsInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutLabtestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutLabtestsInputObjectSchema).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServicesCreateNestedOneWithoutLabtestsInputObjectSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutLabtestsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateNestedOneWithoutLabtestsInput>;
export const ServicesCreateNestedOneWithoutLabtestsInputObjectZodSchema = makeSchema();
