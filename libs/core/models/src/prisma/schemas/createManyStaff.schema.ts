import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { StaffCreateManyInputObjectSchema as StaffCreateManyInputObjectSchema } from './objects/StaffCreateManyInput.schema';

export const StaffCreateManySchema: z.ZodType<Prisma.StaffCreateManyArgs> = z.object({ data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StaffCreateManyArgs>;

export const StaffCreateManyZodSchema = z.object({ data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();