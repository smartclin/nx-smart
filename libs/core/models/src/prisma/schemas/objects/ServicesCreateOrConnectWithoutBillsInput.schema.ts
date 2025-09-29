import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesCreateWithoutBillsInputObjectSchema as ServicesCreateWithoutBillsInputObjectSchema } from './ServicesCreateWithoutBillsInput.schema';
import { ServicesUncheckedCreateWithoutBillsInputObjectSchema as ServicesUncheckedCreateWithoutBillsInputObjectSchema } from './ServicesUncheckedCreateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServicesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServicesCreateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutBillsInputObjectSchema)])
}).strict();
export const ServicesCreateOrConnectWithoutBillsInputObjectSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateOrConnectWithoutBillsInput>;
export const ServicesCreateOrConnectWithoutBillsInputObjectZodSchema = makeSchema();
