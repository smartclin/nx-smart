import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ServicesIncludeObjectSchema as ServicesIncludeObjectSchema } from './objects/ServicesInclude.schema';
import { ServicesOrderByWithRelationInputObjectSchema as ServicesOrderByWithRelationInputObjectSchema } from './objects/ServicesOrderByWithRelationInput.schema';
import { ServicesWhereInputObjectSchema as ServicesWhereInputObjectSchema } from './objects/ServicesWhereInput.schema';
import { ServicesWhereUniqueInputObjectSchema as ServicesWhereUniqueInputObjectSchema } from './objects/ServicesWhereUniqueInput.schema';
import { ServicesScalarFieldEnumSchema } from './enums/ServicesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServicesFindFirstSelectSchema: z.ZodType<Prisma.ServicesSelect> = z.object({
    id: z.boolean().optional(),
    serviceName: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    labtests: z.boolean().optional(),
    bills: z.boolean().optional(),
    category: z.boolean().optional(),
    duration: z.boolean().optional(),
    isAvailable: z.boolean().optional(),
    appointments: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServicesSelect>;

export const ServicesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    serviceName: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    labtests: z.boolean().optional(),
    bills: z.boolean().optional(),
    category: z.boolean().optional(),
    duration: z.boolean().optional(),
    isAvailable: z.boolean().optional(),
    appointments: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ServicesFindFirstSchema: z.ZodType<Prisma.ServicesFindFirstArgs> = z.object({ select: ServicesFindFirstSelectSchema.optional(), include: z.lazy(() => ServicesIncludeObjectSchema.optional()), orderBy: z.union([ServicesOrderByWithRelationInputObjectSchema, ServicesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServicesWhereInputObjectSchema.optional(), cursor: ServicesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServicesScalarFieldEnumSchema, ServicesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServicesFindFirstArgs>;

export const ServicesFindFirstZodSchema = z.object({ select: ServicesFindFirstSelectSchema.optional(), include: z.lazy(() => ServicesIncludeObjectSchema.optional()), orderBy: z.union([ServicesOrderByWithRelationInputObjectSchema, ServicesOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServicesWhereInputObjectSchema.optional(), cursor: ServicesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServicesScalarFieldEnumSchema, ServicesScalarFieldEnumSchema.array()]).optional() }).strict();