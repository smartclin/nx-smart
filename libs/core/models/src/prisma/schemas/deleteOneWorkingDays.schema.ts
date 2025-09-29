import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';

export const WorkingDaysDeleteOneSchema: z.ZodType<Prisma.WorkingDaysDeleteArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkingDaysDeleteArgs>;

export const WorkingDaysDeleteOneZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict();