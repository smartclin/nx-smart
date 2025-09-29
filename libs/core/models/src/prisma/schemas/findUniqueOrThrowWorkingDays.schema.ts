import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';

export const WorkingDaysFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkingDaysFindUniqueOrThrowArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkingDaysFindUniqueOrThrowArgs>;

export const WorkingDaysFindUniqueOrThrowZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema }).strict();