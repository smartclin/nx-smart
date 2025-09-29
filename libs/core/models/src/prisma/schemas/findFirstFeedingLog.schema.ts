import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FeedingLogIncludeObjectSchema as FeedingLogIncludeObjectSchema } from './objects/FeedingLogInclude.schema';
import { FeedingLogOrderByWithRelationInputObjectSchema as FeedingLogOrderByWithRelationInputObjectSchema } from './objects/FeedingLogOrderByWithRelationInput.schema';
import { FeedingLogWhereInputObjectSchema as FeedingLogWhereInputObjectSchema } from './objects/FeedingLogWhereInput.schema';
import { FeedingLogWhereUniqueInputObjectSchema as FeedingLogWhereUniqueInputObjectSchema } from './objects/FeedingLogWhereUniqueInput.schema';
import { FeedingLogScalarFieldEnumSchema } from './enums/FeedingLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FeedingLogFindFirstSelectSchema: z.ZodType<Prisma.FeedingLogSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    date: z.boolean().optional(),
    type: z.boolean().optional(),
    duration: z.boolean().optional(),
    amount: z.boolean().optional(),
    breast: z.boolean().optional(),
    notes: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FeedingLogSelect>;

export const FeedingLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    date: z.boolean().optional(),
    type: z.boolean().optional(),
    duration: z.boolean().optional(),
    amount: z.boolean().optional(),
    breast: z.boolean().optional(),
    notes: z.boolean().optional()
  }).strict();

export const FeedingLogFindFirstSchema: z.ZodType<Prisma.FeedingLogFindFirstArgs> = z.object({ select: FeedingLogFindFirstSelectSchema.optional(), include: z.lazy(() => FeedingLogIncludeObjectSchema.optional()), orderBy: z.union([FeedingLogOrderByWithRelationInputObjectSchema, FeedingLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedingLogWhereInputObjectSchema.optional(), cursor: FeedingLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FeedingLogScalarFieldEnumSchema, FeedingLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FeedingLogFindFirstArgs>;

export const FeedingLogFindFirstZodSchema = z.object({ select: FeedingLogFindFirstSelectSchema.optional(), include: z.lazy(() => FeedingLogIncludeObjectSchema.optional()), orderBy: z.union([FeedingLogOrderByWithRelationInputObjectSchema, FeedingLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: FeedingLogWhereInputObjectSchema.optional(), cursor: FeedingLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FeedingLogScalarFieldEnumSchema, FeedingLogScalarFieldEnumSchema.array()]).optional() }).strict();