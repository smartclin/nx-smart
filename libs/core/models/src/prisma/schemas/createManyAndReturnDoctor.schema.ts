import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorCreateManyInputObjectSchema as DoctorCreateManyInputObjectSchema } from './objects/DoctorCreateManyInput.schema';

export const DoctorCreateManyAndReturnSchema: z.ZodType<Prisma.DoctorCreateManyAndReturnArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), data: z.union([ DoctorCreateManyInputObjectSchema, z.array(DoctorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DoctorCreateManyAndReturnArgs>;

export const DoctorCreateManyAndReturnZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), data: z.union([ DoctorCreateManyInputObjectSchema, z.array(DoctorCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();