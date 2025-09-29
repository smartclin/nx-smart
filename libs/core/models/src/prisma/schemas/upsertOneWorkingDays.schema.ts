import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysCreateInputObjectSchema as WorkingDaysCreateInputObjectSchema } from './objects/WorkingDaysCreateInput.schema';
import { WorkingDaysUncheckedCreateInputObjectSchema as WorkingDaysUncheckedCreateInputObjectSchema } from './objects/WorkingDaysUncheckedCreateInput.schema';
import { WorkingDaysUpdateInputObjectSchema as WorkingDaysUpdateInputObjectSchema } from './objects/WorkingDaysUpdateInput.schema';
import { WorkingDaysUncheckedUpdateInputObjectSchema as WorkingDaysUncheckedUpdateInputObjectSchema } from './objects/WorkingDaysUncheckedUpdateInput.schema';

export const WorkingDaysUpsertOneSchema: z.ZodType<Prisma.WorkingDaysUpsertArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema, create: z.union([ WorkingDaysCreateInputObjectSchema, WorkingDaysUncheckedCreateInputObjectSchema ]), update: z.union([ WorkingDaysUpdateInputObjectSchema, WorkingDaysUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkingDaysUpsertArgs>;

export const WorkingDaysUpsertOneZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), include: WorkingDaysIncludeObjectSchema.optional(), where: WorkingDaysWhereUniqueInputObjectSchema, create: z.union([ WorkingDaysCreateInputObjectSchema, WorkingDaysUncheckedCreateInputObjectSchema ]), update: z.union([ WorkingDaysUpdateInputObjectSchema, WorkingDaysUncheckedUpdateInputObjectSchema ]) }).strict();