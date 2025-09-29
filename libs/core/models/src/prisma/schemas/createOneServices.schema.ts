import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesSelectObjectSchema as ServicesSelectObjectSchema } from './objects/ServicesSelect.schema';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './objects/ServicesInclude.schema';
import { ServicesCreateInputObjectSchema as ServicesCreateInputObjectSchema } from './objects/ServicesCreateInput.schema';
import { ServicesUncheckedCreateInputObjectSchema as ServicesUncheckedCreateInputObjectSchema } from './objects/ServicesUncheckedCreateInput.schema';

export const ServicesCreateOneSchema: z.ZodType<Prisma.ServicesCreateArgs> = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), data: z.union([ServicesCreateInputObjectSchema, ServicesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ServicesCreateArgs>;

export const ServicesCreateOneZodSchema = z.object({ select: ServicesSelectObjectSchema.optional(), include: ServicesIncludeObjectSchema.optional(), data: z.union([ServicesCreateInputObjectSchema, ServicesUncheckedCreateInputObjectSchema]) }).strict();