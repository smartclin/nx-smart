import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentCreateManyInputObjectSchema as AppointmentCreateManyInputObjectSchema } from './objects/AppointmentCreateManyInput.schema';

export const AppointmentCreateManySchema: z.ZodType<Prisma.AppointmentCreateManyArgs> = z.object({ data: z.union([ AppointmentCreateManyInputObjectSchema, z.array(AppointmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentCreateManyArgs>;

export const AppointmentCreateManyZodSchema = z.object({ data: z.union([ AppointmentCreateManyInputObjectSchema, z.array(AppointmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();