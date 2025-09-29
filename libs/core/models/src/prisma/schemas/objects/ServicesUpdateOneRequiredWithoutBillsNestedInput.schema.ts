import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ServicesCreateWithoutBillsInputObjectSchema as ServicesCreateWithoutBillsInputObjectSchema } from './ServicesCreateWithoutBillsInput.schema';
import { ServicesUncheckedCreateWithoutBillsInputObjectSchema as ServicesUncheckedCreateWithoutBillsInputObjectSchema } from './ServicesUncheckedCreateWithoutBillsInput.schema';
import { ServicesCreateOrConnectWithoutBillsInputObjectSchema as ServicesCreateOrConnectWithoutBillsInputObjectSchema } from './ServicesCreateOrConnectWithoutBillsInput.schema';
import { ServicesUpsertWithoutBillsInputObjectSchema as ServicesUpsertWithoutBillsInputObjectSchema } from './ServicesUpsertWithoutBillsInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './ServicesWhereUniqueInput.schema';
import { ServicesUpdateToOneWithWhereWithoutBillsInputObjectSchema as ServicesUpdateToOneWithWhereWithoutBillsInputObjectSchema } from './ServicesUpdateToOneWithWhereWithoutBillsInput.schema';
import { ServicesUpdateWithoutBillsInputObjectSchema as ServicesUpdateWithoutBillsInputObjectSchema } from './ServicesUpdateWithoutBillsInput.schema';
import { ServicesUncheckedUpdateWithoutBillsInputObjectSchema as ServicesUncheckedUpdateWithoutBillsInputObjectSchema } from './ServicesUncheckedUpdateWithoutBillsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServicesCreateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedCreateWithoutBillsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutBillsInputObjectSchema).optional(),
  upsert: z.lazy(() => ServicesUpsertWithoutBillsInputObjectSchema).optional(),
  connect: z.lazy(() => ServicesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServicesUpdateToOneWithWhereWithoutBillsInputObjectSchema), z.lazy(() => ServicesUpdateWithoutBillsInputObjectSchema), z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputObjectSchema)]).optional()
}).strict();
export const ServicesUpdateOneRequiredWithoutBillsNestedInputObjectSchema: z.ZodType<Prisma.ServicesUpdateOneRequiredWithoutBillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServicesUpdateOneRequiredWithoutBillsNestedInput>;
export const ServicesUpdateOneRequiredWithoutBillsNestedInputObjectZodSchema = makeSchema();
