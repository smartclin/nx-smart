import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysSelectObjectSchema as WorkingDaysSelectObjectSchema } from './objects/WorkingDaysSelect.schema';
import { WorkingDaysCreateManyInputObjectSchema as WorkingDaysCreateManyInputObjectSchema } from './objects/WorkingDaysCreateManyInput.schema';

export const WorkingDaysCreateManyAndReturnSchema: z.ZodType<Prisma.WorkingDaysCreateManyAndReturnArgs> = z.object({ select: WorkingDaysSelectObjectSchema.optional(), data: z.union([ WorkingDaysCreateManyInputObjectSchema, z.array(WorkingDaysCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysCreateManyAndReturnArgs>;

export const WorkingDaysCreateManyAndReturnZodSchema = z.object({ select: WorkingDaysSelectObjectSchema.optional(), data: z.union([ WorkingDaysCreateManyInputObjectSchema, z.array(WorkingDaysCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();