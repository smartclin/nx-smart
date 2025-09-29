import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';

export const StaffDeleteOneSchema: z.ZodType<Prisma.StaffDeleteArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StaffDeleteArgs>;

export const StaffDeleteOneZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict();