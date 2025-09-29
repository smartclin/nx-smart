import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ReminderIncludeObjectSchema as ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema';
import { ReminderOrderByWithRelationInputObjectSchema as ReminderOrderByWithRelationInputObjectSchema } from './objects/ReminderOrderByWithRelationInput.schema';
import { ReminderWhereInputObjectSchema as ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema';
import { ReminderWhereUniqueInputObjectSchema as ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema';
import { ReminderScalarFieldEnumSchema } from './enums/ReminderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReminderFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReminderSelect> = z.object({
    id: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    appointment: z.boolean().optional(),
    method: z.boolean().optional(),
    sentAt: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReminderSelect>;

export const ReminderFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    appointment: z.boolean().optional(),
    method: z.boolean().optional(),
    sentAt: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict();

export const ReminderFindFirstOrThrowSchema: z.ZodType<Prisma.ReminderFindFirstOrThrowArgs> = z.object({ select: ReminderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReminderIncludeObjectSchema.optional()), orderBy: z.union([ReminderOrderByWithRelationInputObjectSchema, ReminderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReminderWhereInputObjectSchema.optional(), cursor: ReminderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReminderScalarFieldEnumSchema, ReminderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReminderFindFirstOrThrowArgs>;

export const ReminderFindFirstOrThrowZodSchema = z.object({ select: ReminderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReminderIncludeObjectSchema.optional()), orderBy: z.union([ReminderOrderByWithRelationInputObjectSchema, ReminderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReminderWhereInputObjectSchema.optional(), cursor: ReminderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReminderScalarFieldEnumSchema, ReminderScalarFieldEnumSchema.array()]).optional() }).strict();