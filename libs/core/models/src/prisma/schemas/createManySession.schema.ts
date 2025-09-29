import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { SessionCreateManyInputObjectSchema as SessionCreateManyInputObjectSchema } from './objects/SessionCreateManyInput.schema';

export const SessionCreateManySchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({ data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SessionCreateManyArgs>;

export const SessionCreateManyZodSchema = z.object({ data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();