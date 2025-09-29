import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesUpdateWithoutBillsInputObjectSchema as ServicesUpdateWithoutBillsInputObjectSchema } from './ServicesUpdateWithoutBillsInput.schema';
import { ServicesUncheckedUpdateWithoutBillsInputObjectSchema as ServicesUncheckedUpdateWithoutBillsInputObjectSchema } from './ServicesUncheckedUpdateWithoutBillsInput.schema';
import { ServicesCreateWithoutBillsInputObjectSchema as ServicesCreateWithoutBillsInputObjectSchema } from './ServicesCreateWithoutBillsInput.schema';
import { ServicesUncheckedCreateWithoutBillsInputObjectSchema as ServicesUncheckedCreateWithoutBillsInputObjectSchema } from './ServicesUncheckedCreateWithoutBillsInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServicesUpdateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputObjectSchema)]),
  create: z.union([z.lazy(() => ServicesCreateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutBillsInputObjectSchema)]),
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional()
}).strict();
export const ServicesUpsertWithoutBillsInputObjectSchema: z.ZodType<Prisma.ServicesUpsertWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpsertWithoutBillsInput>;
export const ServicesUpsertWithoutBillsInputObjectZodSchema = makeSchema();
