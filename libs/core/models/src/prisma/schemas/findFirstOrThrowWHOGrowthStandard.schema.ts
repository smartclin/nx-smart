import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WHOGrowthStandardOrderByWithRelationInputObjectSchema as WHOGrowthStandardOrderByWithRelationInputObjectSchema } from './objects/WHOGrowthStandardOrderByWithRelationInput.schema';
import { WHOGrowthStandardWhereInputObjectSchema as WHOGrowthStandardWhereInputObjectSchema } from './objects/WHOGrowthStandardWhereInput.schema';
import { WHOGrowthStandardWhereUniqueInputObjectSchema as WHOGrowthStandardWhereUniqueInputObjectSchema } from './objects/WHOGrowthStandardWhereUniqueInput.schema';
import { WHOGrowthStandardScalarFieldEnumSchema } from './enums/WHOGrowthStandardScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WHOGrowthStandardFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WHOGrowthStandardSelect> = z.object({
    id: z.boolean().optional(),
    ageInMonths: z.boolean().optional(),
    gender: z.boolean().optional(),
    measurementType: z.boolean().optional(),
    lValue: z.boolean().optional(),
    mValue: z.boolean().optional(),
    sValue: z.boolean().optional(),
    sd0: z.boolean().optional(),
    sd1neg: z.boolean().optional(),
    sd1pos: z.boolean().optional(),
    sd2neg: z.boolean().optional(),
    sd2pos: z.boolean().optional(),
    sd3neg: z.boolean().optional(),
    sd3pos: z.boolean().optional(),
    sd4neg: z.boolean().optional(),
    sd4pos: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardSelect>;

export const WHOGrowthStandardFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    ageInMonths: z.boolean().optional(),
    gender: z.boolean().optional(),
    measurementType: z.boolean().optional(),
    lValue: z.boolean().optional(),
    mValue: z.boolean().optional(),
    sValue: z.boolean().optional(),
    sd0: z.boolean().optional(),
    sd1neg: z.boolean().optional(),
    sd1pos: z.boolean().optional(),
    sd2neg: z.boolean().optional(),
    sd2pos: z.boolean().optional(),
    sd3neg: z.boolean().optional(),
    sd3pos: z.boolean().optional(),
    sd4neg: z.boolean().optional(),
    sd4pos: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const WHOGrowthStandardFindFirstOrThrowSchema: z.ZodType<Prisma.WHOGrowthStandardFindFirstOrThrowArgs> = z.object({ select: WHOGrowthStandardFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WHOGrowthStandardOrderByWithRelationInputObjectSchema, WHOGrowthStandardOrderByWithRelationInputObjectSchema.array()]).optional(), where: WHOGrowthStandardWhereInputObjectSchema.optional(), cursor: WHOGrowthStandardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WHOGrowthStandardScalarFieldEnumSchema, WHOGrowthStandardScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WHOGrowthStandardFindFirstOrThrowArgs>;

export const WHOGrowthStandardFindFirstOrThrowZodSchema = z.object({ select: WHOGrowthStandardFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([WHOGrowthStandardOrderByWithRelationInputObjectSchema, WHOGrowthStandardOrderByWithRelationInputObjectSchema.array()]).optional(), where: WHOGrowthStandardWhereInputObjectSchema.optional(), cursor: WHOGrowthStandardWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WHOGrowthStandardScalarFieldEnumSchema, WHOGrowthStandardScalarFieldEnumSchema.array()]).optional() }).strict();