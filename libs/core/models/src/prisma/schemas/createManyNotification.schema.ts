import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { NotificationCreateManyInputObjectSchema as NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';

export const NotificationCreateManySchema: z.ZodType<Prisma.NotificationCreateManyArgs> = z.object({ data: z.union([ NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationCreateManyArgs>;

export const NotificationCreateManyZodSchema = z.object({ data: z.union([ NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();