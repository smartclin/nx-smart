import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorCreateManyInputObjectSchema as DoctorCreateManyInputObjectSchema } from './objects/DoctorCreateManyInput.schema';

export const DoctorCreateManySchema: z.ZodType<Prisma.DoctorCreateManyArgs> = z.object({ data: z.union([ DoctorCreateManyInputObjectSchema, z.array(DoctorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCreateManyArgs>;

export const DoctorCreateManyZodSchema = z.object({ data: z.union([ DoctorCreateManyInputObjectSchema, z.array(DoctorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();