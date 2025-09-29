import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';

export const WorkingDaysFindUniqueSchema: z.ZodType<Prisma.WorkingDaysFindUniqueArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkingDaysFindUniqueArgs>;

export const WorkingDaysFindUniqueZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict();