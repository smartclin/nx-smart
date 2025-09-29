import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { GrowthChartIncludeObjectSchema as GrowthChartIncludeObjectSchema } from './objects/GrowthChartInclude.schema';
import { GrowthChartOrderByWithRelationInputObjectSchema as GrowthChartOrderByWithRelationInputObjectSchema } from './objects/GrowthChartOrderByWithRelationInput.schema';
import { GrowthChartWhereInputObjectSchema as GrowthChartWhereInputObjectSchema } from './objects/GrowthChartWhereInput.schema';
import { GrowthChartWhereUniqueInputObjectSchema as GrowthChartWhereUniqueInputObjectSchema } from './objects/GrowthChartWhereUniqueInput.schema';
import { GrowthChartScalarFieldEnumSchema } from './enums/GrowthChartScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GrowthChartFindManySelectSchema: z.ZodType<Prisma.GrowthChartSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    gender: z.boolean().optional(),
    patient: z.boolean().optional(),
    date: z.boolean().optional(),
    ageInDays: z.boolean().optional(),
    height: z.boolean().optional(),
    weight: z.boolean().optional(),
    headCircumference: z.boolean().optional(),
    percentileHeight: z.boolean().optional(),
    percentileWeight: z.boolean().optional(),
    percentileHead: z.boolean().optional(),
    measuredById: z.boolean().optional(),
    measuredBy: z.boolean().optional(),
    heightZScore: z.boolean().optional(),
    weightZScore: z.boolean().optional(),
    notes: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GrowthChartSelect>;

export const GrowthChartFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    gender: z.boolean().optional(),
    patient: z.boolean().optional(),
    date: z.boolean().optional(),
    ageInDays: z.boolean().optional(),
    height: z.boolean().optional(),
    weight: z.boolean().optional(),
    headCircumference: z.boolean().optional(),
    percentileHeight: z.boolean().optional(),
    percentileWeight: z.boolean().optional(),
    percentileHead: z.boolean().optional(),
    measuredById: z.boolean().optional(),
    measuredBy: z.boolean().optional(),
    heightZScore: z.boolean().optional(),
    weightZScore: z.boolean().optional(),
    notes: z.boolean().optional()
  }).strict();

export const GrowthChartFindManySchema: z.ZodType<Prisma.GrowthChartFindManyArgs> = z.object({ select: GrowthChartFindManySelectSchema.optional(), include: z.lazy(() => GrowthChartIncludeObjectSchema.optional()), orderBy: z.union([GrowthChartOrderByWithRelationInputObjectSchema, GrowthChartOrderByWithRelationInputObjectSchema.array()]).optional(), where: GrowthChartWhereInputObjectSchema.optional(), cursor: GrowthChartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GrowthChartScalarFieldEnumSchema, GrowthChartScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GrowthChartFindManyArgs>;

export const GrowthChartFindManyZodSchema = z.object({ select: GrowthChartFindManySelectSchema.optional(), include: z.lazy(() => GrowthChartIncludeObjectSchema.optional()), orderBy: z.union([GrowthChartOrderByWithRelationInputObjectSchema, GrowthChartOrderByWithRelationInputObjectSchema.array()]).optional(), where: GrowthChartWhereInputObjectSchema.optional(), cursor: GrowthChartWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GrowthChartScalarFieldEnumSchema, GrowthChartScalarFieldEnumSchema.array()]).optional() }).strict();