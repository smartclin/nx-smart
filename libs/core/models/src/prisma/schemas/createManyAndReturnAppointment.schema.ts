import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { AppointmentSelectObjectSchema as AppointmentSelectObjectSchema } from './objects/AppointmentSelect.schema';
import { AppointmentCreateManyInputObjectSchema as AppointmentCreateManyInputObjectSchema } from './objects/AppointmentCreateManyInput.schema';

export const AppointmentCreateManyAndReturnSchema: z.ZodType<Prisma.AppointmentCreateManyAndReturnArgs> = z.object({ select: AppointmentSelectObjectSchema.optional(), data: z.union([ AppointmentCreateManyInputObjectSchema, z.array(AppointmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AppointmentCreateManyAndReturnArgs>;

export const AppointmentCreateManyAndReturnZodSchema = z.object({ select: AppointmentSelectObjectSchema.optional(), data: z.union([ AppointmentCreateManyInputObjectSchema, z.array(AppointmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();