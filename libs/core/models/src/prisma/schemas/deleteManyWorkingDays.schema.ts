import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './objects/WorkingDaysWhereInput.schema';

export const WorkingDaysDeleteManySchema: z.ZodType<Prisma.WorkingDaysDeleteManyArgs> = z.object({ where: WorkingDaysWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysDeleteManyArgs>;

export const WorkingDaysDeleteManyZodSchema = z.object({ where: WorkingDaysWhereInputObjectSchema.optional() }).strict();