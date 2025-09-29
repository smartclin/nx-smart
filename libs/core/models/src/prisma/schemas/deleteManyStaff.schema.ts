import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';

export const StaffDeleteManySchema: z.ZodType<Prisma.StaffDeleteManyArgs> = z.object({ where: StaffWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StaffDeleteManyArgs>;

export const StaffDeleteManyZodSchema = z.object({ where: StaffWhereInputObjectSchema.optional() }).strict();