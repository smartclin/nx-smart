import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutBillsInputObjectSchema as ServicesCreateWithoutBillsInputObjectSchema } from './ServicesCreateWithoutBillsInput.schema';
import { ServicesUncheckedCreateWithoutBillsInputObjectSchema as ServicesUncheckedCreateWithoutBillsInputObjectSchema } from './ServicesUncheckedCreateWithoutBillsInput.schema';
import { ServicesCreateOrConnectWithoutBillsInputObjectSchema as ServicesCreateOrConnectWithoutBillsInputObjectSchema } from './ServicesCreateOrConnectWithoutBillsInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServicesCreateNestedOneWithoutBillsInputObjectSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutBillsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesCreateNestedOneWithoutBillsInput>;
export const ServicesCreateNestedOneWithoutBillsInputObjectZodSchema = makeSchema();
