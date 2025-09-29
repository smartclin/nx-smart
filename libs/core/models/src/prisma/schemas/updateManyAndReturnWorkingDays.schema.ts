import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysUpdateManyMutationInputObjectSchema as WorkingDaysUpdateManyMutationInputObjectSchema } from './objects/WorkingDaysUpdateManyMutationInput.schema';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './objects/WorkingDaysWhereInput.schema';

export const WorkingDaysUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkingDaysUpdateManyAndReturnArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), data: WorkingDaysUpdateManyMutationInputObjectSchema, where: WorkingDaysWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysUpdateManyAndReturnArgs>;

export const WorkingDaysUpdateManyAndReturnZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), data: WorkingDaysUpdateManyMutationInputObjectSchema, where: WorkingDaysWhereInputObjectSchema.optional() }).strict();