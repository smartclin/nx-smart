import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysCreateInputObjectSchema as WorkingDaysCreateInputObjectSchema } from './objects/WorkingDaysCreateInput.schema';
import { WorkingDaysUncheckedCreateInputObjectSchema as WorkingDaysUncheckedCreateInputObjectSchema } from './objects/WorkingDaysUncheckedCreateInput.schema';

export const WorkingDaysCreateOneSchema: z.ZodType<Prisma.WorkingDaysCreateArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), data: z.union([WorkingDaysCreateInputObjectSchema, WorkingDaysUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkingDaysCreateArgs>;

export const WorkingDaysCreateOneZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), data: z.union([WorkingDaysCreateInputObjectSchema, WorkingDaysUncheckedCreateInputObjectSchema]) }).strict();