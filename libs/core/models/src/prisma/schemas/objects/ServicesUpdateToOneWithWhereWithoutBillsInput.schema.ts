import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './ServicesWhereInput.schema';
import { ServicesUpdateWithoutBillsInputObjectSchema as ServicesUpdateWithoutBillsInputObjectSchema } from './ServicesUpdateWithoutBillsInput.schema';
import { ServicesUncheckedUpdateWithoutBillsInputObjectSchema as ServicesUncheckedUpdateWithoutBillsInputObjectSchema } from './ServicesUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServicesUpdateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputObjectSchema)])
}).strict();
export const ServicesUpdateToOneWithWhereWithoutBillsInputObjectSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutBillsInput>;
export const ServicesUpdateToOneWithWhereWithoutBillsInputObjectZodSchema = makeSchema();
