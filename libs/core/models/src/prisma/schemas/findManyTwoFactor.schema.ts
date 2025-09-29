import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { TwoFactorIncludeObjectSchema as TwoFactorIncludeObjectSchema } from './objects/TwoFactorInclude.schema';
import { TwoFactorOrderByWithRelationInputObjectSchema as TwoFactorOrderByWithRelationInputObjectSchema } from './objects/TwoFactorOrderByWithRelationInput.schema';
import { TwoFactorWhereInputObjectSchema as TwoFactorWhereInputObjectSchema } from './objects/TwoFactorWhereInput.schema';
import { TwoFactorWhereUniqueInputObjectSchema as TwoFactorWhereUniqueInputObjectSchema } from './objects/TwoFactorWhereUniqueInput.schema';
import { TwoFactorScalarFieldEnumSchema } from './enums/TwoFactorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TwoFactorFindManySelectSchema: z.ZodType<Prisma.TwoFactorSelect> = z.object({
    id: z.boolean().optional(),
    secret: z.boolean().optional(),
    backupCodes: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TwoFactorSelect>;

export const TwoFactorFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    secret: z.boolean().optional(),
    backupCodes: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const TwoFactorFindManySchema: z.ZodType<Prisma.TwoFactorFindManyArgs> = z.object({ select: TwoFactorFindManySelectSchema.optional(), include: z.lazy(() => TwoFactorIncludeObjectSchema.optional()), orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TwoFactorScalarFieldEnumSchema, TwoFactorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TwoFactorFindManyArgs>;

export const TwoFactorFindManyZodSchema = z.object({ select: TwoFactorFindManySelectSchema.optional(), include: z.lazy(() => TwoFactorIncludeObjectSchema.optional()), orderBy: z.union([TwoFactorOrderByWithRelationInputObjectSchema, TwoFactorOrderByWithRelationInputObjectSchema.array()]).optional(), where: TwoFactorWhereInputObjectSchema.optional(), cursor: TwoFactorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TwoFactorScalarFieldEnumSchema, TwoFactorScalarFieldEnumSchema.array()]).optional() }).strict();