import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  secret: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  backupCodes: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TwoFactorUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.TwoFactorUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TwoFactorUncheckedUpdateWithoutUserInput>;
export const TwoFactorUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
