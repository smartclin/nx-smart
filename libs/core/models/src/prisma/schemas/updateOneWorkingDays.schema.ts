import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysUpdateInputObjectSchema as WorkingDaysUpdateInputObjectSchema } from './objects/WorkingDaysUpdateInput.schema';
import { WorkingDaysUncheckedUpdateInputObjectSchema as WorkingDaysUncheckedUpdateInputObjectSchema } from './objects/WorkingDaysUncheckedUpdateInput.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';

export const WorkingDaysUpdateOneSchema: z.ZodType<Prisma.WorkingDaysUpdateArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), data: z.union([WorkingDaysUpdateInputObjectSchema, WorkingDaysUncheckedUpdateInputObjectSchema]), where: WorkingDaysWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkingDaysUpdateArgs>;

export const WorkingDaysUpdateOneZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), data: z.union([WorkingDaysUpdateInputObjectSchema, WorkingDaysUncheckedUpdateInputObjectSchema]), where: WorkingDaysWhereUniqueInputObjectSchema }).strict();