import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutLabtestsInputObjectSchema as ServicesCreateWithoutLabtestsInputObjectSchema } from './ServicesCreateWithoutLabtestsInput.schema';
import { ServicesUncheckedCreateWithoutLabtestsInputObjectSchema as ServicesUncheckedCreateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedCreateWithoutLabtestsInput.schema';
import { ServicesCreateOrConnectWithoutLabtestsInputObjectSchema as ServicesCreateOrConnectWithoutLabtestsInputObjectSchema } from './ServicesCreateOrConnectWithoutLabtestsInput.schema';
import { ServicesUpsertWithoutLabtestsInputObjectSchema as ServicesUpsertWithoutLabtestsInputObjectSchema } from './ServicesUpsertWithoutLabtestsInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesUpdateToOneWithWhereWithoutLabtestsInputObjectSchema as ServicesUpdateToOneWithWhereWithoutLabtestsInputObjectSchema } from './ServicesUpdateToOneWithWhereWithoutLabtestsInput.schema';
import { ServicesUpdateWithoutLabtestsInputObjectSchema as ServicesUpdateWithoutLabtestsInputObjectSchema } from './ServicesUpdateWithoutLabtestsInput.schema';
import { ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema as ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema } from './ServicesUncheckedUpdateWithoutLabtestsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutLabtestsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutLabtestsInputObjectSchema).optional(),
  upsert: z.lazy(() => ServicesUpsertWithoutLabtestsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServicesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServicesUpdateToOneWithWhereWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUpdateWithoutLabtestsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutLabtestsInputObjectSchema)]).optional()
}).strict();
export const ServicesUpdateOneWithoutLabtestsNestedInputObjectSchema: z.ZodType<Prisma.ServicesUpdateOneWithoutLabtestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateOneWithoutLabtestsNestedInput>;
export const ServicesUpdateOneWithoutLabtestsNestedInputObjectZodSchema = makeSchema();
