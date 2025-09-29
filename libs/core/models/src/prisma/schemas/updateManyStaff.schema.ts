import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { StaffUpdateManyMutationInputObjectSchema as StaffUpdateManyMutationInputObjectSchema } from './objects/StaffUpdateManyMutationInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';

export const StaffUpdateManySchema: z.ZodType<Prisma.StaffUpdateManyArgs> = z.object({ data: StaffUpdateManyMutationInputObjectSchema, where: StaffWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StaffUpdateManyArgs>;

export const StaffUpdateManyZodSchema = z.object({ data: StaffUpdateManyMutationInputObjectSchema, where: StaffWhereInputObjectSchema.optional() }).strict();