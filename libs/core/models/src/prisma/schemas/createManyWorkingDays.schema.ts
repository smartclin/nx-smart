import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysCreateManyInputObjectSchema as WorkingDaysCreateManyInputObjectSchema } from './objects/WorkingDaysCreateManyInput.schema';

export const WorkingDaysCreateManySchema: z.ZodType<Prisma.WorkingDaysCreateManyArgs> = z.object({ data: z.union([ WorkingDaysCreateManyInputObjectSchema, z.array(WorkingDaysCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysCreateManyArgs>;

export const WorkingDaysCreateManyZodSchema = z.object({ data: z.union([ WorkingDaysCreateManyInputObjectSchema, z.array(WorkingDaysCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();