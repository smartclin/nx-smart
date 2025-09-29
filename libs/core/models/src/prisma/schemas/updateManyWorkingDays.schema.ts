import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysUpdateManyMutationInputObjectSchema as WorkingDaysUpdateManyMutationInputObjectSchema } from './objects/WorkingDaysUpdateManyMutationInput.schema';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './objects/WorkingDaysWhereInput.schema';

export const WorkingDaysUpdateManySchema: z.ZodType<Prisma.WorkingDaysUpdateManyArgs> = z.object({ data: WorkingDaysUpdateManyMutationInputObjectSchema, where: WorkingDaysWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysUpdateManyArgs>;

export const WorkingDaysUpdateManyZodSchema = z.object({ data: WorkingDaysUpdateManyMutationInputObjectSchema, where: WorkingDaysWhereInputObjectSchema.optional() }).strict();