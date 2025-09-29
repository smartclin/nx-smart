import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { WorkingDaysIncludeObjectSchema as WorkingDaysIncludeObjectSchema } from './objects/WorkingDaysInclude.schema';
import { WorkingDaysOrderByWithRelationInputObjectSchema as WorkingDaysOrderByWithRelationInputObjectSchema } from './objects/WorkingDaysOrderByWithRelationInput.schema';
import { WorkingDaysWhereInputObjectSchema as WorkingDaysWhereInputObjectSchema } from './objects/WorkingDaysWhereInput.schema';
import { WorkingDaysWhereUniqueInputObjectSchema as WorkingDaysWhereUniqueInputObjectSchema } from './objects/WorkingDaysWhereUniqueInput.schema';
import { WorkingDaysScalarFieldEnumSchema } from './enums/WorkingDaysScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkingDaysFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WorkingDaysSelect> = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    day: z.boolean().optional(),
    startTime: z.boolean().optional(),
    closeTime: z.boolean().optional(),
    doctor: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkingDaysSelect>;

export const WorkingDaysFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    day: z.boolean().optional(),
    startTime: z.boolean().optional(),
    closeTime: z.boolean().optional(),
    doctor: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const WorkingDaysFindFirstOrThrowSchema: z.ZodType<Prisma.WorkingDaysFindFirstOrThrowArgs> = z.object({ select: WorkingDaysFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WorkingDaysIncludeObjectSchema.optional()), orderBy: z.union([WorkingDaysOrderByWithRelationInputObjectSchema, WorkingDaysOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkingDaysWhereInputObjectSchema.optional(), cursor: WorkingDaysWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkingDaysScalarFieldEnumSchema, WorkingDaysScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkingDaysFindFirstOrThrowArgs>;

export const WorkingDaysFindFirstOrThrowZodSchema = z.object({ select: WorkingDaysFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WorkingDaysIncludeObjectSchema.optional()), orderBy: z.union([WorkingDaysOrderByWithRelationInputObjectSchema, WorkingDaysOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkingDaysWhereInputObjectSchema.optional(), cursor: WorkingDaysWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkingDaysScalarFieldEnumSchema, WorkingDaysScalarFieldEnumSchema.array()]).optional() }).strict();